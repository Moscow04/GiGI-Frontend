import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl">Have a question or want to learn more? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">We'll get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-4 text-green-700 underline hover:text-green-500 cursor-pointer">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us more..."></textarea>
              </div>
              <button type="submit" className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition cursor-pointer">Send Message</button>
            </form>
          )}
        </div>
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-medium text-gray-900">Address</p>
                <p className="text-gray-600">123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📧</div>
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">info@gigicloud.academy</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📞</div>
              <div>
                <p className="font-medium text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🕐</div>
              <div>
                <p className="font-medium text-gray-900">Hours</p>
                <p className="text-gray-600">Mon-Fri: 9AM - 7PM EST<br />Sat: 10AM - 3PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
