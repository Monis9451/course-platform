import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer */}
      <footer className="w-full py-8 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <img src="mindplanner_new_logo.png" alt="mindplanner_logo" className="h-20 md:h-24 mb-3 object-contain" style={{ maxWidth: '100%' }} />
              <p className="text-sm text-white/90">
                Helping you unlock your full potential through evidence-based psychology.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Courses</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Unburdening Trauma</a></li>
                <li><a href="#" className="hover:text-white">Unburdening Love</a></li>
                <li><a href="#" className="hover:text-white">Course Bundle</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Podcast</a></li>
                <li><a href="#" className="hover:text-white">Free Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60">© 2024 The Mind Planner. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-white/60 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer