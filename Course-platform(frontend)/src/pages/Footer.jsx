import React, { useState } from 'react'
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSignup = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email)
    setEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <div>
      {/* Footer */}
      <footer className="w-full py-16 bg-[#B45B29] text-white">
        <div className="container px-8 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-semibold text-white">TRANSFORM NOW</h3>
              <ul className="space-y-3 text-white/90">
                <li><a href="/course/1" className="hover:text-white transition-colors">Unburdening Trauma</a></li>
                <li><a href="/course/2" className="hover:text-white transition-colors">Unburdening Love</a></li>
                <li><a href="/courses" className="hover:text-white transition-colors">All Courses</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>

            {/* Center Column - Logo and Newsletter */}
            <div className="flex flex-col items-center text-center space-y-6">
              <img 
                src="/mindplanner_new_logo.png" 
                alt="The Mind Planner Logo" 
                className="h-16 w-auto object-contain" 
              />
              <p className="text-white/90 text-sm max-w-sm">
                Join our community for exclusive content, wellness tips, and transformational insights.
              </p>
              
              {/* Newsletter Signup */}
              <form onSubmit={handleNewsletterSignup} className="w-full max-w-sm">
                <div className="flex flex-col space-y-4">                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-3 rounded-lg bg-cream text-gray-800 placeholder-[#B45B29] focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="bg-cream text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start space-y-6">
              <h3 className="text-xl font-semibold text-white">CONNECT WITH US</h3>
              <ul className="space-y-3 text-white/90">
                <li><a href="/support" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About The Mind Planner</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support & FAQ</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

          </div>          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-12 mb-8">
            <a href="#" className="bg-white text-[#B45B29] p-3 rounded-full hover:bg-gray-100 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#B45B29] p-3 rounded-full hover:bg-gray-100 transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#B45B29] p-3 rounded-full hover:bg-gray-100 transition-colors">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 mb-8">
            <a href="/blogs" className="hover:text-white transition-colors">BLOGS</a>
            <a href="/mental-health" className="hover:text-white transition-colors">MENTAL HEALTH</a>
            <a href="/terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</a>
            <a href="/privacy-statement" className="hover:text-white transition-colors">PRIVACY STATEMENTS</a>
            <a href="/disclaimer" className="hover:text-white transition-colors">DISCLAIMER</a>
            <a href="/contact-us" className="hover:text-white transition-colors">CONTACT US</a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/60 text-sm mb-2">
              Copyright © The Mind Planner 2025 • All Rights Reserved.
            </p>
            <p className="text-white/50 text-xs max-w-4xl mx-auto leading-relaxed">
              The Mind Planner and its team are not licensed medical care providers and are not rendering personal medical advice or treatment. 
              Always consult your doctor or health care provider. Use of this website, including any of its content, is subject to our Terms & Conditions.
            </p>
            <p className="text-white/50 text-xs mt-2">
              Email Signup Terms: By clicking "Sign Up" I consent to the collection and secure storage of this data by The Mind Planner as described in 
              our Privacy Policy. We will be using the information you provide to stay in touch with you and provide updates and marketing.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default Footer