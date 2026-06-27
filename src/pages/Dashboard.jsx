import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import API_BASE from '../config'

export default function Dashboard() {
  const { user } = useAuth()
  const [enrollments, setEnrollments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('gigi_token')
    if (!token) return setLoading(false)

    fetch(`${API_BASE}/api/enrollments/my`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.enrollments) setEnrollments(data.enrollments)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
        <p className="text-gray-600 mt-2">Track your learning progress and continue where you left off.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">My Courses</h2>
          {loading && <p className="text-gray-500">Loading enrollments…</p>}
          {!loading && enrollments.length === 0 && (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-10 text-center">
              <p className="text-gray-500 mb-4">You're not enrolled in any courses yet.</p>
              <Link to="/courses" className="text-indigo-700 font-medium hover:text-indigo-500 transition">Browse courses →</Link>
            </div>
          )}
          {enrollments.map((e) => (
            <div key={e.id} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
                <span className="text-sm font-medium text-indigo-700">{e.progress}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-indigo-700 h-2.5 rounded-full transition-all" style={{ width: `${e.progress}%` }}></div>
              </div>
              <p className="text-sm text-gray-500 mb-4">{e.category} · {e.level}</p>
              <button className="bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-800 transition cursor-pointer">Continue Learning</button>
            </div>
          ))}
          <Link to="/courses" className="block text-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-gray-500 hover:text-indigo-700 hover:border-indigo-400 transition">
            + Browse more courses
          </Link>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">Name:</span>
                <p className="text-gray-900 font-medium">{user?.name}</p>
              </div>
              <div>
                <span className="text-gray-500">Email:</span>
                <p className="text-gray-900 font-medium">{user?.email}</p>
              </div>
              <div>
                <span className="text-gray-500">Member since:</span>
                <p className="text-gray-900 font-medium">{user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'Today'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl shadow-md p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Pro Tip</h3>
            <p className="text-sm text-indigo-200 mb-4">Set aside 1 hour daily for hands-on labs to accelerate your cloud learning.</p>
            <span className="text-xs text-indigo-300">GIGI Cloud Academy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
