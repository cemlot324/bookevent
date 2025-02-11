import Image from 'next/image'

const Partnership = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4558a3]">
          In Partnership With
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Partner Section */}
          <div className="space-y-6 text-center md:text-left">
            <div className="relative h-32 w-full max-w-[300px] mx-auto md:mx-0">
              <Image
                src="/YoungMinds.png"
                alt="Partner logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#4558a3]">
                YoungMinds
              </h3>
              <p className="leading-relaxed text-black">
                YoungMinds are a mental health charity for children, young people and their parents, making sure young people can get the mental health support they need.
              </p>
              <a 
                href="https://www.youngminds.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#4558a3] hover:text-[#3a4b8c] font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Special Guest Section */}
          <div className="space-y-6 text-center md:text-left">
            <div className="relative aspect-square w-full max-w-[300px] mx-auto md:mx-0">
              <Image
                src="/User.jpg"
                alt="John Berg"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#4558a3]">
                John Berg
              </h3>
              <p className="leading-relaxed text-black">
                Join us in welcoming our distinguished special guest who will be 
                sharing insights and experiences during this exclusive event.
              </p>
              <a 
                href="https://www.linkedin.com/in/special-guest-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4558a3] hover:text-[#3a4b8c] font-medium"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership 