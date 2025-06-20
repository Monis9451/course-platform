import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
// import CourseLanding from './pages/CourseLanding'
import About from './pages/About'
import CourseContent from './pages/CourseContent'
import Support from "./pages/Support";
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/Thankyou";
import Blogs from './pages/Blogs';
import MentalHealth from './pages/MentalHealth';
import PrivacyStatement from './pages/PrivacyStatement'
import Disclaimer from './pages/Disclaimer';
import ContactUs from './pages/ContactUs';
import Error from './pages/404';

const App = () => {
  return (
  <div className="font-fitzgerald font-thin bg-white text-black min-h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        {/* <Route path="/course/:id/landing" element={<CourseLanding />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/course-content/:id" element={<CourseContent />} />
        <Route path="/support" element={<Support />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/privacy-statement" element={<PrivacyStatement />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </div>
    
  )
}

export default App