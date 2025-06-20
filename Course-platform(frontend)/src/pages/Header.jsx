import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [mobileActiveDropdown, setMobileActiveDropdown] = React.useState(null)

    const navigationItems = [
      { name: 'Unburdening Trauma', path: '/course/1' },
      { name: 'Unburdening Love', path: '/course/2' },
      { name: 'All Courses', path: '/courses' },
      { name: 'Help Center', path: '/support' },
      { name: 'Our Story', path: '/about' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'About The Mind Planner', path: '/about' }
    ]

    const dropdownData = {
      courses: [
        { name: 'Unburdening Trauma', path: '/course/1' },
        { name: 'Unburdening Love', path: '/course/2' },
        { name: 'All Courses', path: '/courses' }
      ],
      support: [
        { name: 'Help Center', path: '/support' }
      ],      
      about: [
        { name: 'Our Story', path: '/about' },
        { name: 'About The Mind Planner', path: '/about' },
        { name: 'Blogs', path: '/blogs' }
      ]
    }

    const handleMobileDropdownToggle = (dropdown) => {
      setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown)
    }

  return (
    <div className="pt-24">        <nav className="bg-cream px-4 py-3 fixed top-0 w-full z-50 shadow">
        <div className="flex items-center justify-between max-w-7xl mx-auto relative">
          <div className="flex flex-1 items-center md:hidden">            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#B45B29] focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>          </div>          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <div className="logo-container">
                <img src="/themindplanner-primary.png" alt="mindplanner_logo" className="h-16 md:h-16 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200" />
              </div>
            </Link>          </div>          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-3 relative">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-[#B45B29] hover:text-[#8B3A1A] text-sm px-2 py-1 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div><div className="flex-1 flex justify-end">
            <Link to="/login" className="text-[#B45B29] hover:text-[#8B3A1A] text-xs md:text-base mr-2 md:mr-1 transition-colors duration-200 border-2 border-[#B45B29] rounded-full px-3 py-1 md:px-6 md:py-1.5">
              Log In
            </Link>
          </div>
        </div>        <div
          className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-500 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } bg-primary shadow-lg flex flex-col p-6 md:hidden overflow-y-auto`}
          style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        >
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>          
          {/* Add some top padding to avoid collision with close button */}
          <div className="pt-12 space-y-4">
            {/* Courses Mobile Dropdown */}
          <div>
            <button 
              onClick={() => handleMobileDropdownToggle('courses')}
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between py-2 transition-colors duration-300"
            >
              <span>Courses</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ease-in-out ${mobileActiveDropdown === 'courses' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'courses' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 mt-2 space-y-2">
                {dropdownData.courses.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg py-1 transition-colors duration-200 transform hover:translate-x-1"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>          {/* Support Mobile Dropdown */}
          <div>
            <button 
              onClick={() => handleMobileDropdownToggle('support')}
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between py-2 transition-colors duration-300"
            >
              <span>Support</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ease-in-out ${mobileActiveDropdown === 'support' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'support' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 mt-2 space-y-2">
                {dropdownData.support.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg py-1 transition-colors duration-200 transform hover:translate-x-1"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
            {/* About Mobile Dropdown */}
          <div>
            <button 
              onClick={() => handleMobileDropdownToggle('about')}
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between py-2 transition-colors duration-300"
            >
              <span>About</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ease-in-out ${mobileActiveDropdown === 'about' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileActiveDropdown === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 mt-2 space-y-2">
                {dropdownData.about.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg py-1 transition-colors duration-200 transform hover:translate-x-1"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header