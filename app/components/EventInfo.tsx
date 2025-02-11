// Remove if not used:
// import Image from 'next/image'

const EventInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#4558a3] mb-4">
            Calm Little Minds
          </h1>
          <p className="text-xl text-black/80">
            A Mindfulness Event for Children and Their Carers
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] text-center mb-8">
            What is this Event About?
          </h2>
          
          <div className="space-y-6 text-black leading-relaxed max-w-3xl mx-auto">
            <p>
              Join us for a special event designed to help little minds learn how to calm themselves 
              while giving parents, teachers, and carers the tools to support them. In today's busy 
              world, teaching children mindfulness can make a huge difference in their well-being, 
              focus, and emotional resilience.
            </p>

            <p>
              We are thrilled to welcome the author of Be Here Now, who will read this beautiful 
              story to our audience, followed by an engaging Q&A session. This heartwarming book 
              helps children understand the power of being present and finding calm in everyday moments.
            </p>

            <p>
              To deepen the experience, a Master's student in psychology will share insights into 
              mindfulness for little ones and lead simple yet effective exercises. These techniques 
              can be practiced at home, in the classroom, or independently, helping children develop 
              lifelong skills for managing emotions and staying centered.
            </p>

            <p>
              This event is perfect for families, educators, and caregivers who want to bring more 
              mindfulness into children's lives. Come along, listen, learn, and take away practical 
              tools to help little minds find their calm.
            </p>

            <div className="pt-8 space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-[#4558a3]">When</h3>
                <p>March 9th, 2025 at 3:00 PM GMT</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-[#4558a3]">Where</h3>
                <p>Online via Zoom</p>
                <p>Tickets are free, but please book in advance to secure your spot.</p>
              </div>

              <div className="pt-4 text-center">
                <a 
                  href="https://www.amazon.co.uk/Be-Here-Now-Mindfulness-little/dp/B0DPVQJ49J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4558a3] text-white px-8 py-3 rounded-lg hover:bg-[#3a4b8c] transition-colors font-semibold"
                >
                  Book Tickets Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventInfo 