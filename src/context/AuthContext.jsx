import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('gigi_user')
    if (stored) setUser(JSON.parse(stored))
    setLoading(false)
  }, [])

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('gigi_users') || '[]')
    if (users.find((u) => u.email === email)) return { error: 'Email already registered' }
    const newUser = { id: Date.now(), name, email, password }
    users.push(newUser)
    localStorage.setItem('gigi_users', JSON.stringify(users))
    const { password: _, ...safe } = newUser
    setUser(safe)
    localStorage.setItem('gigi_user', JSON.stringify(safe))
    return { success: true }
  }

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('gigi_users') || '[]')
    const found = users.find((u) => u.email === email && u.password === password)
    if (!found) return { error: 'Invalid email or password' }
    const { password: _, ...safe } = found
    setUser(safe)
    localStorage.setItem('gigi_user', JSON.stringify(safe))
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('gigi_user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
