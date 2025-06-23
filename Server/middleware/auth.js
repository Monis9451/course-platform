const admin = require('firebase-admin');
const User = require('../models/User');
const { AppError } = require('../utils/appError');
const { catchAsync } = require('../utils/catchAsync');

// Initialize Firebase Admin SDK
const initializeFirebase = () => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        clientId: process.env.FIREBASE_CLIENT_ID,
        authUri: process.env.FIREBASE_AUTH_URI,
        tokenUri: process.env.FIREBASE_TOKEN_URI,
      }),
      projectId: process.env.FIREBASE_PROJECT_ID,
    });
  }
};

// Initialize Firebase when this module is loaded
initializeFirebase();

// Protect routes - verify Firebase token
const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access.', 401));
  }

  // 2) Verify Firebase token
  let decodedToken;
  try {
    decodedToken = await admin.auth().verifyIdToken(token);
  } catch (error) {
    return next(new AppError('Invalid token. Please log in again!', 401));
  }

  // 3) Check if user still exists in our database
  let currentUser = await User.findOne({ firebaseUid: decodedToken.uid });
  
  // If user doesn't exist in our DB, create them
  if (!currentUser) {
    currentUser = await User.create({
      firebaseUid: decodedToken.uid,
      name: decodedToken.name || 'User',
      email: decodedToken.email,
      isVerified: decodedToken.email_verified || false,
      avatar: {
        url: decodedToken.picture || ''
      }
    });
  }

  if (!currentUser) {
    return next(new AppError('The user belonging to this token does no longer exist.', 401));
  }

  // Grant access to protected route
  req.user = currentUser;
  req.firebaseUser = decodedToken;
  next();
});

// Authorize specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };
};

// Optional auth - for routes that work with or without authentication
const optionalAuth = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (token) {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const currentUser = await User.findOne({ firebaseUid: decodedToken.uid });
      
      if (currentUser) {
        req.user = currentUser;
        req.firebaseUser = decodedToken;      }
    } catch (error) {
      // Token is invalid, but we continue without authentication
      console.log('Invalid token in optional auth:', error.message);
    }
  }

  next();
});

module.exports = { protect, authorize, optionalAuth };
