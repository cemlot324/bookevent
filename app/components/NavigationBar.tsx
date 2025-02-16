'use client'

import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'event-info', label: 'Event Info' },
    { id: 'meet-writer', label: 'Writer' },
    { id: 'book', label: 'Book' },
    { id: 'special-guest', label: 'Guest' },
    { id: 'questions', label: 'Ask a Question' },
    { id: 'organisers', label: 'Team' },
    { id: 'blog', label: 'Little Blog for Little Minds' },
  ]

  return (
    <nav className={`fixed top-[32px] left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#4558a3] shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end py-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${
              isScrolled ? 'text-white' : 'text-[#4558a3] bg-white/80'
            }`}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center py-3 gap-6 overflow-x-auto">
          {navItems.map((item) => (
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

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`p-4 space-y-2 ${
            isScrolled ? 'bg-[#4558a3]' : 'bg-white/95'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                  ${isScrolled 
                    ? 'text-white hover:bg-white/20' 
                    : 'text-[#4558a3] hover:bg-[#4558a3]/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar 