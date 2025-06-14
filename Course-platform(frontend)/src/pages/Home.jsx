import React from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "Understanding Trauma",
      description: "A self-paced program",
      img_src: "/1.png",
      img_alt: "Understanding Trauma Course",
      category: "BUNDLE"
    },
    {
      id: 2,
      title: "Understanding Love",
      description: "A comprehensive guide",
      img_src: "/love_course.png",
      img_alt: "Understanding Love Course",
      category: "BUNDLE"
    },
    {
      id: 3,
      title: "Course Bundle",
      description: "Complete transformation",
      img_src: "/1.png",
      img_alt: "Course Bundle",
      category: "BUNDLE"
    },
    {
      id: 4,
      title: "Unlocked Power Journal",
      description: "Mindmaster series",
      img_src: "/themindplanner primary.png",
      img_alt: "Unlocked Power Journal",
      category: "JOURNAL"
    },
    {
      id: 5,
      title: "Power Bundle",
      description: "Complete package",
      img_src: "/themindplanner primary.png",
      img_alt: "Power Bundle",
      category: "BUNDLE"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            THE #1 PLATFORM FOR PSYCHOLOGICAL TRANSFORMATION
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Mind, Break Barriers, and Unlock Your Full Potential – at Your Own Pace
          </h1>
          <p className="text-lg text-warm-gray max-w-4xl mx-auto mb-8 leading-relaxed">
            Backed by evidence-based psychology and neuroscience, these courses are designed to help you overcome challenges, rewire unhelpful patterns, and build a more empowered, fulfilling life. Whether you're working through trauma, low mood and/or anxiety, relationship blocks, or productivity struggles, you'll gain the tools to create lasting change.
          </p>
          <button className="bg-primary hover-primary text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200">
            EXPLORE COURSES
          </button>
        </div>

        {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <img src={course.img_src} alt={course.img_alt} className="object-contain h-full w-full" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded">
                    {course.category}
                  </span>
                </div>
                  </div>
                  <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-warm-gray text-sm">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </main>

            {/* Feature Section */}
      <section className="w-full py-12 bg-white">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="p-8 border border-gray-200 rounded-md">
              <h3 className="font-bold text-lg mb-4 uppercase">Complete Transformation</h3>
              <p className="text-black/80">
                Access comprehensive modules covering both trauma healing and relationship patterns, designed to address core emotional blocks and create lasting change in your life.
              </p>
            </div>
            
            {/* Box 2 */}
            <div className="p-8 border border-gray-200 rounded-md">
              <h3 className="font-bold text-lg mb-4 uppercase">Evidence-Based Approach</h3>
              <p className="text-black/80">
                Grounded in clinical psychology, neuroscience, and attachment theory, offering practical tools that blend modern therapy with accessible, everyday applications.
              </p>
            </div>
            
            {/* Box 3 */}
            <div className="p-8 border border-gray-200 rounded-md">
              <h3 className="font-bold text-lg mb-4 uppercase">Powerful Exercises</h3>
              <p className="text-black/80">
                Discover your authentic self through targeted exercises that release limiting beliefs, heal old wounds, and help you create the life and relationships you truly desire.
              </p>
            </div>
          </div>
        </div>
      </section>        {/* You Will Overcome Section */}
      <section className="w-full py-16 bg-cream">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="aspect-video rounded-md overflow-hidden">
              <video 
                controls
                className="w-full h-full object-cover"
                poster="/attached_assets/11.png"
              >
                <source src="/TMP 6.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl font-serif mb-8">You will overcome...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>People-pleasing patterns and codependent tendencies</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Difficulties setting healthy boundaries</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Anxiety, self-doubt and imposter syndrome</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Negative thought patterns and self-criticism</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Repeating unhealthy relationship dynamics</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Limiting beliefs that block your potential</span>
                </li>
              </ul>
              
              <h2 className="text-3xl font-serif mt-10 mb-8">You will learn...</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>How to identify and heal your core trauma patterns</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Tools to regulate your nervous system and reduce anxiety</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>Techniques to break free from people-pleasing behaviors</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1">•</div>
                  <span>How to build authentic relationships based on trust and respect</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="courses">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-light mb-6 text-black leading-tight tracking-tight uppercase">
              Our Courses
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-black/80">
              Developed by Dr. Samina Khatun based on evidence-based therapeutic approaches
            </p>
          </div>

          {/* Unburdening Trauma Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-cream overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="1.png" 
                  alt="Unburdening Trauma Course" 
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif mb-4 text-black group-hover:text-[#bd6334] transition-colors uppercase">
                  Unburdening Trauma
                </h3>
                <p className="text-black/90 mb-6 text-lg">
                  A 6-Week Self-Paced Programme
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-serif text-black font-light">£75</span>
                </div>
                <button
                  onClick={() => window.location.href = "/checkout/1"}
                  className="flex w-full bg-primary hover:bg-primary text-white px-6 py-6 rounded-none text-lg tracking-wider group-hover:bg-[#a65525]"
                >
                  BUY THIS COURSE
                  <svg className="pt-1.5 ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="mt-4 flex flex-col space-y-2">
                  <a href="/course/1/landing">
                    <div className="text-primary hover:text-primary font-medium uppercase text-sm tracking-wider text-center">
                      Learn More
                    </div>
                  </a>
                  <a href="/course-content/1">
                    <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium hover:bg-[#a65525]">
                      View Course Content
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Unburdening Love Course */}
            <div className="bg-cream overflow-hidden group">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="love_course.png" 
                  alt="Unburdening Love Course" 
                  className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-serif mb-4 text-black group-hover:text-primary transition-colors uppercase">
                  Unburdening Love
                </h3>
                <p className="text-black/90 mb-6 text-lg">
                  A 6-Week Self-Paced Programme
                </p>
                <div className="flex items-center mb-6">
                  <span className="text-3xl font-serif text-black font-light">£75</span>
                </div>
                <button
                  onClick={() => window.location.href = "/checkout/2"}
                  className="flex w-full bg-primary hover:bg-primary text-white px-6 py-6 rounded-none text-lg tracking-wider group-hover:bg-[#a65525]"
                >
                  BUY THIS COURSE
                  <svg className="pt-1.5 ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="mt-4 text-center">
                  <a href="/course/2/landing">
                    <div className="text-primary hover:text-primary font-medium uppercase text-sm tracking-wider">
                      Learn More
                    </div>
                  </a>
                  <a href="/course-content/1">
                    <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium hover:bg-[#a65525]">
                      View Course Content
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bundle Offer */}
                <div className="mt-20 py-16 px-12 bg-[#bd6334]/10 border border-[#bd6334]/30 text-center">
                <h3 className="text-3xl font-serif mb-6 text-black uppercase">Bundle Both Courses & Save 20%</h3>
                <div className="flex justify-center items-center mb-6">
                  <div className="text-4xl font-serif font-light text-black">£120</div>
                  <div className="ml-3 text-lg line-through text-gray-500">£150</div>
                  <div className="ml-3 bg-primary text-white font-medium px-3 py-1 text-sm">SAVE £30</div>
                </div>
                <p className="mb-10 text-lg max-w-xl mx-auto text-black/80">
                  Get lifetime access to both transformative courses and save £30
                </p>
                <div className="flex justify-center">
                  <button
                  onClick={() => window.location.href = "/bundle"}
                  className="bg-[#bd6334] hover:bg-[#a65525] text-white px-12 py-6 rounded-none text-lg tracking-wider flex items-center justify-center"
                  >
                  GET BOTH COURSES
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  </button>
                </div>
                </div>
              </div> 
              </section>
      <Footer />
    </div>
  )
}

export default Home