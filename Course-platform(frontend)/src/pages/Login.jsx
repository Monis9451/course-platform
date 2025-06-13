import React from 'react'
import { useState } from 'react'
import Header from './Header'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
        <Header />        <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto bg-cream p-8 shadow-md">
          <h1 className="text-3xl font-serif text-center text-black mb-8">
            {isLogin ? "Log In to Your Account" : "Create an Account"}
          </h1>
          
          <div className="flex mb-8">
            <button 
              className={`flex-1 py-2 text-center ${isLogin ? 'bg-primary text-white' : 'bg-white text-black'}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button 
              className={`flex-1 py-2 text-center ${!isLogin ? 'bg-primary text-white' : 'bg-white text-black'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          
          <form className="space-y-6">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                    Full Name
                  </label>                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
              </>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>
            
            {isLogin ? (
              <div className="text-right">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>
            ) : (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Confirm your password"
                />
              </div>            )}
            
            <button className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-none">
              {isLogin ? "Log In" : "Create Account"}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm">
            <span className="text-black">Or log in with</span>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <button className="bg-[#395693] text-white py-2 flex items-center justify-center">
              Facebook
            </button>
            <button className="bg-[#4285F4] text-white py-2 flex items-center justify-center">
              Google
            </button>
          </div>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-black">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                className="text-primary hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login