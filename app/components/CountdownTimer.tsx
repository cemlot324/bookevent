'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface CountdownTimerProps {
  targetDate: Date
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const showLastSpots = process.env.NEXT_PUBLIC_SHOW_LAST_SPOTS === 'true'

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="relative bg-[#4558a3] py-16 px-4 overflow-hidden">
      {/* Flying Bee Container */}
      <div className="absolute inset-0">
        <div className="animate-float">
          <Image
            src="/bee1.png"
            alt="Flying Bee"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      </div>

      {showLastSpots && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-red-500 text-white px-4 py-2 rounded-full animate-pulse shadow-lg">
            <span className="text-sm font-bold">Last Few Spots!</span>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto relative z-1">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
            Join Us for this Special Event
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(timeLeft).map(([key, value]) => (
              <div 
                key={key} 
                className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform"
              >
                <span className="text-4xl md:text-5xl font-bold text-[#4558a3] mb-2">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="text-sm md:text-base uppercase tracking-wider text-[#4558a3]/80 font-medium">
                  {key}
                </span>
              </div>
            ))}
          </div>

          <a 
            href="https://your-booking-website.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-white text-[#4558a3] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg transform hover:scale-105 transition-all"
          >
            Reserve Your Free Spot
          </a>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer 