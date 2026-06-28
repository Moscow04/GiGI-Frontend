import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import API_BASE from '../config'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('gigi_token')
    if (!token) return setLoading(false)

    fetch(API_BASE + '/api/auth/me', {
      headers: { Authorization: 'Bearer ' + token },
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user)
        else localStorage.removeItem('gigi_token')
      })
      .catch(() => localStorage.removeItem('gigi_token'))
      .finally(() => setLoading(false))
  }, [])

  const register = useCallback(async (name, email, password) => {
    try {
      const res = await fetch(API_BASE + '/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) return { error: data.errors ? data.errors.join(', ') : data.error }
      return { success: true, message: data.message }
    } catch {
      return { error: 'Network error - is the server running?' }
    }
  }, [])

  const login = useCallback(async (email, password) => {
    try {
      const res = await fetch(API_BASE + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (!res.ok) return { error: data.errors ? data.errors.join(', ') : data.error }
      localStorage.setItem('gigi_token', data.token)
      setUser(data.user)
      return { success: true }
    } catch {
      return { error: 'Network error - is the server running?' }
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('gigi_token')
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
