import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../pages/Header'

const Courses = () => {
  const [isLoading, setIsLoading] = useState(true)
  
  const courses = [
    {
      id: 1,
      title: "Understanding Trauma",
      description: "A 6-Week Self-Paced Programme designed to help you identify and heal trauma patterns, develop emotional regulation skills, and break free from limiting beliefs that hold you back.",
      img_src: "1.png",
      img_alt: "Understanding Trauma Course",
      category: "BUNDLE"
    },
    {
      id: 2,
      title: "Understanding Love",
      description: "A 6-Week Self-Paced Programme focused on building authentic relationships, understanding attachment styles, and creating healthy relationship patterns.",
      img_src: "love_course.png",
      img_alt: "Understanding Love Course",
      category: "BUNDLE"
    },
  ]

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])
  return (
    <div>
        <Header />
        {/* Hero section */}
      <section className="bg-[#f7f1e9] py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-center text-black mb-6">Our Courses</h1>
          <p className="text-xl text-center text-black max-w-3xl mx-auto mb-10">
            Transform your life with our professionally crafted self-paced courses designed to help you heal, grow, and thrive.
          </p>
        </div>
      </section>

      {/* Courses section */}
      <section className="py-20">        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-primary text-lg">Loading courses...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {courses?.map((course) => (
                <div key={course.id} className="bg-[#f7f1e9] overflow-hidden group shadow-md">                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={course.img_src} 
                      alt={course.img_alt} 
                      className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-serif mb-4 text-black group-hover:text-[#bd6334] transition-colors uppercase">
                      {course.title.split(":")[0]}
                    </h3>
                    <p className="text-black mb-6 line-clamp-3">
                      {course.description}
                    </p>                    <div className="flex gap-4">
                      <button 
                        onClick={() => window.location.href = `/checkout/${course.id}`}
                        className="bg-primary hover:bg-[#a3532c] text-white px-8 py-2 rounded-none transition-colors duration-200"
                      >
                        Buy Now
                      </button>
                      <button 
                        onClick={() => window.location.href = `/course/${course.id}`}
                        className="border border-primary text-[#bd6334] hover:bg-[#bd6334] hover:text-white px-8 py-2 rounded-none transition-colors duration-200"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Begin Your Journey?</h2>          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Enroll in one of our transformative courses today and take the first step toward healing and growth.
          </p>
          <Link to="/login">
            <button className="border border-white text-white hover:bg-white hover:text-[#bd6334] px-8 py-6 text-lg transition-colors duration-200">
              Get Started
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Courses