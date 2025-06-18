import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState(null)
    const [mobileActiveDropdown, setMobileActiveDropdown] = React.useState(null)

    const dropdownData = {
      courses: [
        { name: 'Unburdening Trauma', path: '/course/1' },
        { name: 'Unburdening Love', path: '/course/2' },
        { name: 'All Courses', path: '/courses' }
      ],
      support: [
        { name: 'Contact Us', path: '/support' },
        { name: 'FAQ', path: '/support' },
        { name: 'Help Center', path: '/support' }
      ],      
      about: [
        { name: 'Our Story', path: '/about' },
        { name: 'Meet Dr. Samina', path: '/about' },
        { name: 'About The Mind Planner', path: '/about' }
      ]
    }

    const handleDropdownToggle = (dropdown) => {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    const handleMobileDropdownToggle = (dropdown) => {
      setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown)
    }
    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (!event.target.closest('.dropdown-container')) {
          setActiveDropdown(null)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

  return (
    <div className="pt-24">
        <nav className="bg-primary px-4 py-3 fixed top-0 w-full z-50 shadow">
        <div className="flex items-center justify-between max-w-7xl mx-auto relative">
          <div className="flex flex-1 items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
                />
              </svg>
            </button>
          </div>          <div className="flex-1 flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <img src="/mindplanner_new_logo.png" alt="mindplanner_logo" className="h-20 w-auto cursor-pointer hover:opacity-90 transition-opacity duration-200" />
            </Link>
          </div><div className="hidden md:flex flex-1 justify-center">            <div className="flex space-x-8 relative">
              {/* Courses Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownToggle('courses')}
                  className="text-white hover:text-orange-200 text-[1.3rem] flex items-center space-x-1"
                >
                  <span>Courses</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'courses' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>                {activeDropdown === 'courses' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                    {dropdownData.courses.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}              </div>

              {/* Support Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownToggle('support')}
                  className="text-white hover:text-orange-200 text-[1.3rem] flex items-center space-x-1"
                >
                  <span>Support</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'support' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>                {activeDropdown === 'support' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                    {dropdownData.support.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>              {/* About Dropdown */}
              <div className="relative dropdown-container">
                <button 
                  onClick={() => handleDropdownToggle('about')}
                  className="text-white hover:text-orange-200 text-[1.3rem] flex items-center space-x-1"
                >
                  <span>About</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-in slide-in-from-top-2 duration-200">
                    {dropdownData.about.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>          <div className="flex-1 flex justify-end">
            <Link to="/login" className="text-white hover:text-orange-200 text-1xl mr-1 transition-colors duration-200 border-2 border-cream rounded-full px-8 py-2">
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
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between"
            >
              <span>Courses</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === 'courses' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>            {mobileActiveDropdown === 'courses' && (
              <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                {dropdownData.courses.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}          </div>

          {/* Support Mobile Dropdown */}
          <div>
            <button 
              onClick={() => handleMobileDropdownToggle('support')}
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between"
            >
              <span>Support</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === 'support' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>            {mobileActiveDropdown === 'support' && (
              <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                {dropdownData.support.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* About Mobile Dropdown */}
          <div>
            <button 
              onClick={() => handleMobileDropdownToggle('about')}
              className="text-white hover:text-orange-200 text-xl text-left w-full flex items-center justify-between"
            >
              <span>About</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${mobileActiveDropdown === 'about' ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>            {mobileActiveDropdown === 'about' && (
              <div className="ml-4 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-200">
                {dropdownData.about.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-orange-200 hover:text-white text-lg"
                    onClick={() => {
                      setMobileActiveDropdown(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header