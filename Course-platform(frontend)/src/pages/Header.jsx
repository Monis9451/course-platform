import React from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'All Courses', path: '/courses' },
    { name: 'Unburdening Trauma', path: '/course/1' },
    { name: 'Unburdening Love', path: '/course/2' },
    { name: 'About The Mind Planner', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Help Center', path: '/support' },
  ]
  
  return (
    <div className="pt-40">
      <nav className="bg-primary px-4 py-12 fixed top-0 w-full z-50 shadow-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left - Hamburger Menu */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none transition-colors duration-200"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>

          {/* Center - Logo */}          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img 
                src="/mindplanner_new_logo.png" 
                alt="The Mind Planner" 
                className="h-16 md:h-20 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200" 
              />
            </Link>
          </div>{/* Right - Icons */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <button className="hidden md:block text-white hover:text-gray-200 transition-colors duration-200">
              <FiUser className="h-5 w-5" style={{ strokeWidth: 1 }} />
            </button>
            <button className="text-white hover:text-gray-200 transition-colors duration-200">
              <FiSearch className="h-5 w-5" style={{ strokeWidth: 1 }} />
            </button>
            <Link to="/checkout" className="text-white hover:text-gray-200 transition-colors duration-200">
              <FiShoppingCart className="h-5 w-5" style={{ strokeWidth: 1 }} />
            </Link>
          </div>
        </div>        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-80 transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white shadow-2xl flex flex-col`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              className="text-[#B45B29] hover:text-[#8B3A1A] focus:outline-none transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 px-6 py-4">
            <div className="space-y-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-[#B45B29] hover:text-[#8B3A1A] text-lg py-3 border-b border-gray-200 transition-colors duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header