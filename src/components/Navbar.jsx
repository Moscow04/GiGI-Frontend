import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-indigo-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold tracking-tight">GIGI Cloud Academy</Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-indigo-200 transition">Home</Link>
            <Link to="/courses" className="hover:text-indigo-200 transition">Courses</Link>
            <Link to="/about" className="hover:text-indigo-200 transition">About</Link>
            <Link to="/contact" className="hover:text-indigo-200 transition">Contact</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="hover:text-indigo-200 transition">Dashboard</Link>
                <span className="text-indigo-200 text-sm">Hi, {user.name}</span>
                <button onClick={handleLogout} className="bg-white text-indigo-700 px-4 py-1.5 rounded-full font-medium hover:bg-indigo-100 transition cursor-pointer">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-indigo-200 transition">Login</Link>
                <Link to="/register" className="bg-white text-indigo-700 px-4 py-1.5 rounded-full font-medium hover:bg-indigo-100 transition">Register</Link>
              </>
            )}
          </div>
          <button className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-indigo-800 px-4 pb-4 flex flex-col gap-3">
          <Link to="/" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/courses" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>Courses</Link>
          <Link to="/about" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>Contact</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>Dashboard</Link>
              <button onClick={() => { handleLogout(); setOpen(false) }} className="bg-white text-indigo-700 px-4 py-1.5 rounded-full font-medium hover:bg-indigo-100 transition text-left cursor-pointer">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-indigo-200 transition" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" className="bg-white text-indigo-700 px-4 py-1.5 rounded-full font-medium hover:bg-indigo-100 transition text-center" onClick={() => setOpen(false)}>Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
