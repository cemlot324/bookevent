'use client'

import { useState } from 'react'
import Image from 'next/image'

const Questions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit question')
      }

      setStatus('success')
      setFormData({ name: '', email: '', question: '' })
    } catch (error) {
      console.error('Failed to submit question:', error)
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full max-w-[500px] mx-auto">
            <Image
              src="/characters.png"
              alt="Zen the Cat and Little Hen"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] mb-6">
              Ask a Question
            </h2>
            <p className="text-black mb-8">
              Have questions you would like to ask the author or special guest? Send us your questions below for it to be answered live on March 9th.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#4558a3] text-black placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#4558a3] text-black placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  disabled={status === 'sending'}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#4558a3] text-black placeholder-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#4558a3] text-white px-6 py-3 rounded-lg hover:bg-[#3a4b8c] transition-colors font-semibold disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Question'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center">
                  Thank you for your question! Don't miss the live event on March 9th.
                </p>
              )}
              
              {status === 'error' && (
                <p className="text-red-600 text-center">
                  Failed to send question. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Questions 