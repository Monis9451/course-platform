import React, { useState } from 'react';
import Header from "../pages/Header";

function Support() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (faqId) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };
  const faqs = [
    {
      id: 1,
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your membership at any time. A Pathway member who chooses the 12-month payment plan method may cancel their membership within the first 72 hours of enrollment for a $50 cancellation fee. After 72 hours the fee will be cancelled to the remaining cost of their membership agreement. All Lifetime Pathway Membership purchases are Pay in Full Pathway Memberships are final sale & there is no refund or payment plan options.",
      icon: "❌"
    },
    {
      id: 2,
      question: "What if I don't login for an entire month? Can I get a refund for that payment?",
      answer: "Unfortunately, we cannot provide refunds for months when you don't login. Your membership remains active and all content stays accessible to you. We recommend setting reminders to engage with the content regularly to get the most value from your investment.",
      icon: "💡"
    },
    {
      id: 3,
      question: "How often am I billed?",
      answer: "If you choose the monthly payment option, you will be billed automatically every 30 days from your enrollment date. For annual memberships, you'll be billed once per year. All billing is handled securely through our payment processor.",
      icon: "💳"
    },
    {
      id: 4,
      question: "Can I get an extension?",
      answer: "Extensions may be available in certain circumstances. Please contact our support team to discuss your specific situation. We evaluate extension requests on a case-by-case basis, particularly for medical or emergency situations.",
      icon: "📅"
    },
    {
      id: 5,
      question: "Does this membership renew?",
      answer: "Yes, monthly and annual memberships automatically renew unless you cancel before your next billing date. You'll receive email reminders before each renewal. Lifetime memberships do not renew as they provide permanent access.",
      icon: "🔄"
    },
    {
      id: 6,
      question: "What if I want to upgrade to lifetime access?",
      answer: "You can upgrade to lifetime access at any time during your membership. Contact our support team and they'll help you transition to a lifetime membership. Any payments you've already made will be credited toward your lifetime membership cost.",
      icon: "💡"
    }
  ]

  return (
    <div className="flex flex-col">
      <Header />
      {/* Header */}
      <div className="flex flex-col items-center justify-center bg-[#f7f1e9] h-[350px] text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Support Center</h1>
        <p className="text-gray-700 max-w-xl">
          We're here to help you on your journey. Get in touch with our team or
          browse our frequently asked questions.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 px-6 md:px-16">
        {/* Left Column - Form */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-700 mb-6">
            Have a question or need assistance with your course? Fill out the
            form below and our support team will get back to you within 24
            hours.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 p-3 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 p-3 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Subject</label>
              <select className="border border-gray-300 p-3 rounded">
                <option selected>Select a Subject</option>
                <option value="Courses Access">Courses Access</option>
                <option value="Course Access">Course Access</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Billing Question">Billing Question</option>
                <option value="Content Question">Content Question</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Your Message</label>
              <textarea
                rows={6}
                placeholder="Please describe your issue or question in detail"
                className="border border-gray-300 p-3 rounded"
              ></textarea>
            </div>
            <button className="w-full md:w-1/4 bg-[#B45B29] text-white p-4 rounded mt-4 hover:bg-[#a44d1f] transition">
              Send Message
            </button>
          </div>        </div>

        {/* Right Column - FAQ */}
        <div className="flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-3">{faq.icon}</span>
                    <span className="text-gray-800 font-medium text-sm">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                      openFaqId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqId === faq.id ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <div className="px-6">
                    <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
