import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import CourseLanding from './pages/CourseLanding'
import About from './pages/About'
import CourseContent from './pages/CourseContent'
import Error from './pages/404'

const App = () => {
  return (
  <div className="font-fitzgerald font-thin bg-white text-black min-h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course/:id/landing" element={<CourseLanding />} />
        <Route path="/about" element={<About />} />
        <Route path="/course-content/:id" element={<CourseContent />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </div>
    
  )
}

export default App