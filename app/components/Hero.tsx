'use client'

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/NewVideo.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Hero 