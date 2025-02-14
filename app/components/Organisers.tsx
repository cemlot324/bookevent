'use client'

import Image from 'next/image'
import { useState } from 'react'

const organisers = [
  {
    name: "Suzy",
    image: "/Suzy.jpeg",
    description: `Hi, I'm Suzy, and I've always been curious about the world around me. With a background in science and a career spanning 27 years, I've spent much of my time solving problems and asking questions. 
    
    But learning never stops, so I recently took on a new challenge—studying for a Master's degree in a completely different field! It's been a big change, moving from definite answers to a world of creativity and interpretation, but I'm loving the journey.

One of my biggest interests is how our senses—especially taste and smell—affect the way we focus and feel 'in the zone.' My research explores how simple things, like the smell of fresh coffee or the taste of chocolate, can help us concentrate and enjoy what we're doing.

Outside of studying, I love bringing people together, whether it's through lively discussions in webinars or organizing fun events like murder mystery parties. I enjoy a good challenge, a great story, and the chance to learn something new every day.

Life is an adventure, and I'm always looking forward to the next discovery!`
  },
  {
    name: "Aiden",
    image: "/aiden.jpg",
    description: `Hi! My name is Aiden and I have a long-standing career in supporting individuals through challenging times. This has seen me engaging with adults in the community and enabling children to access their education, both in the UK and around the world! I was initially drawn to this line of work after experiencing and overcoming my own mental health and substance misuse issues, feeling a need to make a change in the world and give back what was given to me. After over a decade of this work I felt it time for a change, which has led me to develop a career in Events Management. I am staying true to my passions and am on a mission to deliver engaging experiences that are accessible and fulfilling to all audiences. Outside of work I can often be found enjoying live music or stomping around the Welsh countryside with my fiancée and our rescue dog, Twyla.`
  },
  {
    name: "Hannah",
    image: "/hanna.jpg",
    description: `Hi there, I'm Hannah I grew up in a small village in Germany, but my curiosity led me across the world, from helping laid-back kite events in remote villages on Zanzibar to high-end yacht cruises in Egypt. After working in corporate event management, I returned to my passion while studying for a master's in Event Management.
Mindfulness, especially for kids, is something I feel deeply about. I've always been active and struggled to sit still. It wasn't until later in life that I was diagnosed with ADHD, and I realized how much I had missed having the right tools to manage my energy and focus. Mindfulness has been a game-changer for me, and I wish I had learned these techniques earlier. That's why I'm passionate about giving parents and kids access to them—helping them navigate life with more ease, awareness, and joy.
As a sports enthusiast, I'm especially curious about mindfulness techniques that incorporate movement, helping kids (and adults!) find focus in an active way. I'm excited to share this journey with you!`
  },
  {
    name: "Damian",
    image: "/Damia1.jpg",
    description: `With over seven years of experience in the cinema industry, I have built a career that blends my passion for film, events, and creativity. For five years, I worked as a cinema manager, honing my skills in operations, team leadership, and customer engagement. Transitioning into cinema events management two years ago allowed me to further explore my love for curating unique experiences that bring people together through film.

Beyond my professional background, I have always been drawn to music, movies, and creative expression. These interests fuel my approach to event planning, where I strive to craft memorable and engaging experiences for audiences. Seeking to expand my expertise, I chose to pursue a Master's in Creative Event Management, eager to explore new perspectives and gain deeper insights into the intricacies of event production. This journey has allowed me to experiment with innovative ideas, refine my strategic thinking, and push the boundaries of what makes an event truly special.

As I continue to evolve in this dynamic industry, I am excited to bring fresh ideas to the table, combining my experience with new knowledge to create impactful, immersive events that leave lasting impressions.`
  }
]

const Organisers = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4558a3]">
          Meet the Organisers
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {organisers.map((organiser, index) => (
            <div 
              key={index}
              className="flex flex-col items-center w-64 cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="relative w-48 h-48 mb-4 transition-transform duration-300 hover:scale-105">
                <Image
                  src={organiser.image}
                  alt={organiser.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded-full shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#4558a3] text-center">
                {organiser.name}
              </h3>
            </div>
          ))}
        </div>

        {expandedIndex !== null && (
          <div className="max-w-2xl mx-auto transition-all duration-300">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#4558a3] mb-4">
                {organisers[expandedIndex].name}
              </h3>
              <p className="text-black leading-relaxed">
                {organisers[expandedIndex].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Organisers 