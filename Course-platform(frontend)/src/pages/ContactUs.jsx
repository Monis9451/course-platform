import React, { useState } from 'react'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div>
        <Header />
        
        {/* Contact Us Section */}
        <section className="py-16 bg-cream min-h-screen">
          <div className="container mx-auto px-8 md:px-12 max-w-6xl">
            
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-[#B45B29] mb-6">
                The Mind Planner - Contact Us
              </h1>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                At The Mind Planner, we genuinely value your thoughts and feedback. Whether you have questions, suggestions, or need assistance, we 
                are dedicated to offering the support you deserve. Below are the best ways to reach out for any specific enquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8">
                
                {/* Media and Collaboration Enquiries */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#B45B29] mb-4">Media and Collaboration Enquiries</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We're eager to collaborate with mental health services, media professionals and journalists. For all collaboration-related questions or 
                    opportunities, please reach out to:
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">Email:</span>
                    <a href="mailto:info@themindplanner.com" className="text-[#B45B29] hover:underline">
                      info@themindplanner.com
                    </a>
                  </div>
                </div>

                {/* General Inquiries */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#B45B29] mb-4">General Inquiries</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Have questions about our products or services? We're here to help. Contact us at:
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-800">Email:</span>
                    <a href="mailto:info@themindplanner.com" className="text-[#B45B29] hover:underline">
                      info@themindplanner.com
                    </a>
                  </div>
                </div>

                {/* Customer Support */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#B45B29] mb-4">Customer Support</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Need assistance with orders, shipping, returns, or anything else? Our Customer Support team is ready to assist:
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="font-medium text-gray-800">Email:</span>
                    <a href="mailto:support@themindplanner.com" className="text-[#B45B29] hover:underline">
                      support@themindplanner.com
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your thoughts, questions, and feedback are important to us. We're committed to providing the best support and 
                    look forward to hearing from you!
                  </p>
                </div>

                {/* Company Address */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#B45B29] mb-4">Company Address</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-medium">The Mind Planner Limited</p>
                    <p>128 City Road, London, United Kingdom, EC1V 2NX</p>
                  </div>
                </div>

              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-[#B45B29] mb-4">CONTACT US</h2>
                  <p className="text-gray-600">Send us a message and we'll get back to you soon</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#B45B29] mb-2 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cream border-2 border-gray-300 rounded-lg focus:border-[#B45B29] focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#B45B29] mb-2 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-cream border-2 border-gray-300 rounded-lg focus:border-[#B45B29] focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-[#B45B29] mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-cream border-2 border-gray-300 rounded-lg focus:border-[#B45B29] focus:outline-none transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="Your phone number (optional)"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-[#B45B29] mb-2 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-cream border-2 border-gray-300 rounded-lg focus:border-[#B45B29] focus:outline-none transition-colors resize-vertical text-gray-800 placeholder-gray-500"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-[#B45B29] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#A04A24] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>

                </form>
              </div>

            </div>

            {/* Additional Info */}
            <div className="text-center mt-12 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-[#B45B29] mb-3">
                We're Here to Help
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're looking for support with our products, interested in collaboration opportunities, or simply want to share your thoughts, 
                we're committed to providing you with the best possible experience. Thank you for being part of The Mind Planner community.
              </p>
            </div>

          </div>
        </section>

        <Footer />
    </div>
  )
}

export default ContactUs