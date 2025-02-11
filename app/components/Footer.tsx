'use client'

import { useEffect, useState } from 'react'

const Footer = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const incrementCount = async () => {
      try {
        const response = await fetch('/api/visits')
        const data = await response.json()
        
        if (data.success) {
          setVisitCount(data.count)
        } else {
          setError('Failed to load visit count')
        }
      } catch (error) {
        console.error('Failed to increment visit count:', error)
        setError('Failed to load visit count')
      }
    }

    incrementCount()
  }, [])

  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            {error ? (
              <p className="text-red-600 text-sm">{error}</p>
            ) : visitCount === null ? (
              <p className="text-[#4558a3] font-semibold">Loading...</p>
            ) : (
              <p className="text-[#4558a3] font-semibold">
                Total Visits: <span className="font-bold">{visitCount.toLocaleString()}</span>
              </p>
            )}
          </div>
          <p className="text-gray-600 text-sm">
            © 2024 Be Here Now. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 