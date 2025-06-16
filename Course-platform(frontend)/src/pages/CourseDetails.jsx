import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiShoppingCart, FiUser, FiClock, FiPlayCircle } from 'react-icons/fi'
import Header from '../pages/Header'

// Dummy course data - replace with actual API calls when database is ready
const dummyCoursesData = {
  1: {
    id: 1,
    title: "Understanding Trauma",
    subtitle: "A 6-Week Self-Paced Course",
    description: "Break free from trauma patterns and discover deep healing with evidence-based techniques in this comprehensive self-paced program.",
    fullDescription: "Unpacking the Science of Trauma, Trauma Responses, and Why We Get 'Stuck'",
    instructor: "Dr. Samina Khatun",
    duration: "6 weeks",
    lessons: 24,
    level: "ALL LEVELS",    price: 75,
    featured: true,
    img_src: "/1.png",
    img_alt: "Understanding Trauma Course",
    modules: [
      {
        id: 1,
        title: "Understanding Trauma – How It Affects the Mind & Body",
        description: "Unpacking the Science of Trauma, Trauma Responses, and Why We Get 'Stuck'",
        lessons: [
          {
            id: 1,
            title: "The Neuroscience of Trauma",
            description: "Explore how trauma affects your brain and nervous system, and why understanding these patterns is essential for healing.",
            duration: "18 minutes",
            completed: false
          },
          {
            id: 2,
            title: "Trauma Responses and the Window of Tolerance",
            description: "Learn to recognize your unique trauma responses and how they affect your daily life.",
            duration: "22 minutes",
            completed: false
          },
          {
            id: 3,
            title: "Action - Detach",
            description: "Practical exercise to help you create space for healing by detaching from unhelpful patterns.",
            duration: "15 minutes",
            completed: false
          },
          {
            id: 4,
            title: "Meet Your Subconscious",
            description: "Discover the deeper patterns that drive your responses to stress and emotional triggers.",
            duration: "25 minutes",
            completed: false
          },
          {
            id: 5,
            title: "Understanding Your Trauma Responses",
            description: "Learn to identify your personal trauma responses and what triggers them.",
            duration: "20 minutes",
            completed: false
          },
          {
            id: 6,
            title: "The Amygdala and Fear Response",
            description: "How your brain processes trauma and why you respond the way you do.",
            duration: "15 minutes",
            completed: false
          },
        ]
      },
      {
        id: 2,
        title: "Healing Trauma Through Self-Compassion",
        description: "Learn powerful techniques for healing trauma through self-compassion and mindful awareness.",
        lessons: [
          {
            id: 7,
            title: "Understanding Embodiment",
            description: "Learn what it means to be embodied and why trauma disconnects us from our bodies.",
            duration: "22 minutes",
            completed: false
          },
          {
            id: 8,
            title: "Grounding Techniques",
            description: "Practical tools to help you ground when feeling triggered or disconnected.",
            duration: "25 minutes",
            completed: false
          },
          {
            id: 9,
            title: "Body Scan Meditation",
            description: "A guided practice to help you reconnect with physical sensations safely.",
            duration: "18 minutes",
            completed: false
          },
          {
            id: 10,
            title: "Creating Safety in Your Body",
            description: "ow to build a sense of safety that allows trauma to release.",
            duration: "24 minutes",
            completed: false
          },
        ]
      },
      {
        id: 3,
        title: "Inner Child Healing – Reconnecting with Your Younger Self",
        description: "Healing the Wounds of the Past by Nurturing the Inner Child",
        lessons: [
          {
            id: 11,
            title: "Understanding the Inner Child",
            description: "Learn what the “inner child” represents and why healing this part of yourself is essential.",
            duration: "20 minutes",
            completed: false
          },
          {
            id: 12,
            title: "Identifying Childhood Wounds",
            description: "Recognize the core wounds from childhood that are still affecting you.",
            duration: "25 minutes",
            completed: false
          },
          {
            id: 13,
            title: "Inner Child Dialogue Practice",
            description: "A guided practice to connect with and reassure your inner child.",
            duration: "30 minutes",
            completed: false
          },
          {
            id: 14,
            title: "Reparenting Yourself",
            description: "Learn to give yourself the care, validation and boundaries you needed as a child.",
            duration: "28 minutes",
            completed: false
          },
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: "Understanding Love",
    subtitle: "A 6-Week Self-Paced Course",
    description: "A comprehensive guide to building authentic relationships, understanding attachment styles, and creating healthy relationship patterns.",
    fullDescription: "Exploring the Psychology of Love, Attachment Styles, and Building Secure Relationships",
    instructor: "Dr. Samina Khatun",
    duration: "6 weeks",
    lessons: 20,
    level: "ALL LEVELS",    price: 75,
    featured: true,
    img_src: "/love_course.png",
    img_alt: "Understanding Love Course",
    modules: [
      {
        id: 3,
        title: "Understanding Love – The Psychology of Relationships",
        description: "Exploring the Psychology of Love, Attachment Styles, and Building Secure Relationships",
        lessons: [
          {
            id: 6,
            title: "The Science of Love and Attachment",
            description: "Understand the biological and psychological foundations of love and connection.",
            duration: "20 minutes",
            completed: false
          },
          {
            id: 7,
            title: "Attachment Styles and Their Impact",
            description: "Discover your attachment style and how it influences your relationships.",
            duration: "25 minutes",
            completed: false
          },
          {
            id: 8,
            title: "Building Secure Relationships",
            description: "Practical strategies for creating healthy, authentic connections.",
            duration: "18 minutes",
            completed: false
          }
        ]
      },
      {
        id: 4,
        title: "Communication and Intimacy",
        description: "Master the art of effective communication and building deeper intimacy in relationships.",
        lessons: [
          {
            id: 9,
            title: "Effective Communication Strategies",
            description: "Learn proven techniques for healthy relationship communication.",
            duration: "22 minutes",
            completed: false
          },
          {
            id: 10,
            title: "Building Emotional Intimacy",
            description: "Discover how to create and maintain emotional closeness with your partner.",
            duration: "19 minutes",
            completed: false
          }
        ]
      }
    ]
  }
}

const CourseDetails = () => {  const { id } = useParams()
  const navigate = useNavigate()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userProgress] = useState([]) // Mock user progress

  useEffect(() => {
    // Simulate API call - replace with actual API when database is ready
    const fetchCourse = () => {
      setTimeout(() => {
        const courseData = dummyCoursesData[parseInt(id)]
        setCourse(courseData)
        setLoading(false)
      }, 500)
    }

    fetchCourse()
  }, [id])

  // Calculate course progress
  const calculateProgress = () => {
    if (!course || !userProgress.length) return 0
    
    let totalLessons = 0
    let completedLessons = 0
    
    course.modules.forEach(module => {
      totalLessons += module.lessons.length
      module.lessons.forEach(lesson => {
        if (userProgress.includes(lesson.id)) {
          completedLessons++
        }
      })
    })
    
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  }

  const handleStartCourse = () => {
    if (course && course.modules.length > 0) {
      const firstLesson = course.modules[0].lessons[0]
      if (firstLesson) {
        // For now, just show an alert - replace with actual lesson navigation
        alert(`Starting lesson: ${firstLesson.title}`)
        // navigate(`/lesson/${firstLesson.id}`)
      }
    }
  }
  const handleBuyNow = () => {
    // Navigate to checkout - replace with actual checkout page
    navigate(`/checkout/${course.id}`)
  }

  const isLessonCompleted = (lessonId) => {
    return userProgress.includes(lessonId)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-serif text-black mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="bg-primary text-white px-8 py-3 hover:bg-primary-dark transition-colors">
            Browse All Courses
          </Link>
        </div>
      </div>
    )
  }

  const progressPercentage = calculateProgress()

  return (
    <div className="min-h-screen bg-cream font-fitzgerald font-thin">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="bg-white py-4 border border-gray-300">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span className="text-gray-400">›</span>
            <Link to="/courses" className="text-primary hover:underline">Courses</Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">{course.title}: {course.subtitle}</span>
          </nav>
        </div>
      </div>

      {/* Course Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {course.featured && (
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded uppercase font-medium">
                    Featured
                  </span>
                )}
                <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded uppercase font-medium">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif text-black mb-6 leading-tight">
                {course.title}: {course.subtitle}
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {course.description}
              </p>
                <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FiUser className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiPlayCircle className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              
              {progressPercentage > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Course Progress</span>
                    <span className="text-sm font-medium text-gray-700">{progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full transition-all duration-300" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}
                <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleStartCourse}
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  {progressPercentage > 0 ? "Continue Course" : "Start Course"}
                </button>                <button 
                  onClick={handleBuyNow}
                  className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <FiShoppingCart className="w-5 h-5" />
                  Buy Now - £{course.price}
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
                <img 
                  src={course.img_src} 
                  alt={course.img_alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <button 
                    onClick={handleStartCourse}
                    className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-black mb-12">Course Curriculum</h2>
          
          <div className="space-y-8">
            {course.modules.map((module, moduleIndex) => (
              <ModuleSection 
                key={module.id} 
                module={module} 
                moduleNumber={moduleIndex + 1}
                userProgress={userProgress}
                isLessonCompleted={isLessonCompleted}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

function ModuleSection({ module, moduleNumber, isLessonCompleted }) {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-300">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="bg-primary text-white text-sm px-2 py-1 rounded font-medium">
              Module {moduleNumber}
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-1">
                {module.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {module.description}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                {module.lessons.length} lessons
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <svg 
              className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>      
      {isExpanded && (
        <div className="border-t border-gray-300">
          <ul className="divide-y divide-gray-100">
            {module.lessons.map((lesson, index) => (
              <li key={lesson.id} className="hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-black text-sm">
                        {lesson.title}
                      </h4>
                      <p className="text-gray-600 text-xs mt-1">
                        {lesson.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                    
                    {isLessonCompleted(lesson.id) ? (
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CourseDetails