'use client'

import { useState, useEffect } from 'react'

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#4558a3] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center py-3 gap-6 overflow-x-auto">
          {[
            { id: 'event-info', label: 'Event Info' },
            { id: 'meet-writer', label: 'Writer' },
            { id: 'book', label: 'Book' },
            { id: 'special-guest', label: 'Guest' },
            { id: 'questions', label: 'Ask a Question' },
            { id: 'organisers', label: 'Team' },
            { id: 'blog', label: 'Little Blog for Little Minds' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                ${isScrolled 
                  ? 'text-white hover:bg-white/20' 
                  : 'text-[#4558a3] bg-white/80 hover:bg-white hover:shadow-md'
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar 