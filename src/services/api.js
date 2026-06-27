import API_BASE from '../config'

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('gigi_token')

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
    ...options,
  }

  if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body)
  }

  const res = await fetch(`${API_BASE}${endpoint}`, config)
  const data = await res.json()

  if (!res.ok) {
    const message = data.errors ? data.errors.join(', ') : data.error || 'Request failed'
    throw new Error(message)
  }

  return data
}

export const api = {
  get: (url) => request(url),
  post: (url, body) => request(url, { method: 'POST', body }),
  put: (url, body) => request(url, { method: 'PUT', body }),
  delete: (url) => request(url, { method: 'DELETE' }),
}

export default api
