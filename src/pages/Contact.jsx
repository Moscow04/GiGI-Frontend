import { useState } from 'react'
import API_BASE from '../config'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSending(true)

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSending(false)
    }
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
              <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }} className="mt-4 text-green-700 underline hover:text-green-500 cursor-pointer">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us more..."></textarea>
              </div>
              <button type="submit" disabled={sending} className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition disabled:opacity-50 cursor-pointer">
                {sending ? 'Sending…' : 'Send Message'}
              </button>
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
