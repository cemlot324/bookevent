'use client'

import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Failed to subscribe. Please try again later.')
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] mb-4">
            Stay Updated
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates about mindfulness activities, 
            events, and exclusive content.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === 'sending'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#4558a3] text-black placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-[#4558a3] text-white px-6 py-3 rounded-lg hover:bg-[#3a4b8c] transition-colors font-semibold disabled:opacity-50"
            >
              {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
          
          {status === 'success' && (
            <p className="text-green-600 text-center mt-4">
              {message}
            </p>
          )}
          
          {status === 'error' && (
            <p className="text-red-600 text-center mt-4">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Newsletter 