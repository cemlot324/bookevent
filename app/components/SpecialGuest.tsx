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
              src="/Userdefault.jpg"
              alt="Special Guest"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#4558a3]">
              Master's Student in Psychology
            </h3>
            <div className="space-y-4 text-black/80">
              <p>
                We're excited to welcome our special guest, a passionate researcher in child psychology 
                and mindfulness, who will be sharing valuable insights and answering your questions 
                about mindfulness practices for children.
              </p>
              <p>
                With a focus on how mindfulness can positively impact child development, our guest 
                will discuss practical techniques that can be implemented at home and in educational 
                settings.
              </p>
              <p>
                During the Q&A session, you'll have the opportunity to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ask questions about mindfulness techniques for different age groups</li>
                <li>Learn how to introduce mindfulness to children who might be resistant</li>
                <li>Understand the science behind mindfulness and child development</li>
                <li>Get practical tips for establishing daily mindfulness routines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialGuest 