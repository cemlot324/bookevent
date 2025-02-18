import Image from 'next/image'
import Link from 'next/link'

export default function MagicGlitterJarBlog() {
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
          Magic Glitter Jar - A Mindfulness Craft for Kids
        </h1>

        <div className="flex items-center text-gray-500 mb-8">
          <span>February 17, 2024</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>

        <div className="relative h-[400px] mb-12 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/glitterjar.png"
            alt="Magic Glitter Jar"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black">
          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
            What is a Mindfulness Glitter Jar?
          </h2>
          <p className="text-lg mb-8">
          Helping children understand their emotions can be tricky, but a Glitter Jar is a simple and visual
          way to teach mindfulness.
          </p>

          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
          How to make a Glitter Jar:
          </h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Fill a small clear jar (or bottle) with water.</li>
            <li>Add a few drops of clear glue or baby oil (this slows the movement of the glitter).</li>
            <li>Sprinkle in some glitter and optional food colouring.</li>
            <li>Secure the lid tightly (you can glue it shut for extra security).</li>
            <li>Shake the jar and watch the glitter swirl!</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#4558a3] mt-8 mb-4">
            How to Use Your Glitter Jar
          </h2>
          <p className="text-lg mb-4">
            When your child is feeling overwhelmed, angry, or anxious, encourage them to:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Explain that the glitter represents thoughts and emotions.</li>
            <li>When we feel upset or overwhelmed, our minds can feel like a shaken glitter jar—busy and
            chaotic.</li>
            <li>By sitting still and watching the glitter settle, we can feel calmer, just like our minds when
            we take deep breaths and slow down.</li>
          </ul>
          <p>Encourage your child to use their Glitter Jar when they need a moment of calm.</p>

          <div className="text-gray-600 mt-8">
          #BeHereNow #ZenCat #LittleHen
          </div>
        </div>
      </div>
    </article>
  )
} 