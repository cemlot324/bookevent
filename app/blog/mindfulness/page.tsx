import Image from 'next/image'
import Link from 'next/link'

export default function MindfulnessBlog() {
  return (
    <article className="bg-white min-h-screen font-baskerville">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link 
          href="/" 
          className="text-[#4558a3] hover:text-[#3a4b8c] mb-8 inline-flex items-center group"
        >
          <svg 
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#4558a3] mb-4">
          Mindfulness for Kids: The Missing Piece in Upbringing and Education
        </h1>

        <div className="flex items-center text-gray-500 mb-8">
          <span>February 11, 2025</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>

        <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Blog1.png"
            alt="Mindfulness for Kids"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black">
          <p className="text-lg mb-6">
            Mindfulness has become a buzzword in the world of personal development. From CEOs to athletes, everyone seems to be embracing meditation, breathing exercises, and mindful living. But here's the question: why are we so focused on mindfulness for adults while overlooking its importance for children? Mindfulness shouldn't just be a wellness trend—it should be a fundamental part of childhood.
          </p>

          <p className="text-lg mb-8">
            In a world where kids are constantly stimulated—by screens, school pressures, and social expectations—learning mindfulness early can be a game-changer. Yet, despite its well-documented benefits, mindfulness is rarely emphasized in traditional education or parenting approaches. Why should mindfulness be reserved for adulthood, when children need it just as much, if not more?
          </p>

          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
            Why Mindfulness Matters for Kids
          </h2>
          <p className="text-lg mb-4">
            Mindfulness is the ability to stay present and aware, without getting overwhelmed by emotions or distractions. For children, practicing mindfulness can:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Reduce anxiety and stress</li>
            <li>Improve focus and attention</li>
            <li>Enhance emotional intelligence</li>
            <li>Strengthen resilience</li>
          </ul>

          <p className="text-lg mb-8">
            Research shows that kids who practice mindfulness are better at handling frustration, building friendships, and even improving their academic performance. So why isn't it a core part of how we raise and educate them?
          </p>

          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
            Breaking the Myth: Kids Are Not "Naturally" Mindful
          </h2>
          <p className="text-lg mb-8">
            It's easy to assume that children are naturally present in the moment—after all, they live in a world of play and curiosity. But in today's fast-paced environment, kids are also facing information overload, performance pressure, and emotional struggles at a young age. Mindfulness isn't just about relaxation; it's about equipping children with lifelong tools for emotional and mental well-being.
          </p>

          <p className="text-lg mb-4">
            We invite all parents, guardians, and educators to an interactive online seminar where we will explore:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>The science behind mindfulness and child development</li>
            <li>Simple and effective mindfulness practices for kids</li>
            <li>How to integrate mindfulness into daily routines (without forcing it!)</li>
            <li>The role of mindfulness in emotional regulation and learning</li>
          </ul>

          <p className="text-lg mb-8">
            Let's shift the conversation and give children the same mental tools we seek as adults. Mindfulness shouldn't just be a wellness trend—it should be a fundamental part of childhood.
          </p>

          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
            Join Us for an Exclusive Online Seminar: Be Here Now – Mindfulness for Little Ones
          </h2>

          <div className="text-gray-600 mt-8">
            #beherenow #zencat #littlehen
          </div>
        </div>
      </div>
    </article>
  )
}