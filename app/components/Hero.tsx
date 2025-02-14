'use client'

import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.matchMedia('(max-width: 768px)').matches
      setIsMobile(isMobileView)
      
      // Force video reload when switching
      if (videoRef.current) {
        videoRef.current.load()
        videoRef.current.play()
      }
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [isMobile])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        key={isMobile ? 'mobile' : 'desktop'} // Force remount when switching
        className="absolute w-full h-full object-cover"
      >
        <source 
          src={isMobile ? "/mobilevideo1.mp4" : "/NewVideo.mp4"} 
          type="video/mp4" 
        />
      </video>
    </div>
  )
}

export default Hero 