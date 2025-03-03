'use client'

import Image from "next/image"

const SpecialGuest = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] mb-4">
            Special Guest
          </h2>
          <p className="text-xl text-black/80">
            Join our Q&A session with mindfulness expert
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <Image
              src="/Helle.jpg"
              alt="Special Guest"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#4558a3]">
              Master's Student in Psychology
            </h3>
            <div className="space-y-4 text-black/80">
              <p>
              Hi, I am Helle, and I am a psychology student in Norway. I have been so lucky to be asked to attend this event based on my background in psychology, and an interest in mindfulness.
              </p>
              <p>
              I am a person who loves to get new experiences, I love learning, and being challenged. This is maybe also why psychology is the third degree that I started, and the second that I will finish. It is maybe also why I decided to travel a lot, study abroad and never seem to get tired of this.
              </p>
              <p>
              Although changing direction, and going to new and foreign places can sometimes be uncomfortable and stressful, I am a firm believer of how newness and challenge is a necessity for also feeling sense of mastery, appreciation, and a good path to get to know yourself and get closer to «the otherness» around you.
              </p>
              <p>
              Another big part of my life is sports and nature. I love feeling how the body allows us to do activities and how muscles and reactions also have a memory, and the feeling of ableness. I also love the smell of the forest after it has been raining, the feeling of the wind on my face, the biting cold that prickles. The view once you reach the summit, and the force of the waves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialGuest 