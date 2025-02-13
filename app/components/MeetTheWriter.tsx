import Image from 'next/image'

const MeetTheWriter = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#4558a3]">
          Meet the Writer
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <Image
              src="/authorimage.JPG"
              alt="S.J Abdi"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#4558a3]">
              S.J Abdi
            </h3>
            
            <div className="space-y-4 text-black leading-relaxed">
              <p>
                Sainab's journey is one of resilience, transformation, and hope. Born into the turmoil of war, 
                her family was forced to flee to Somalia, where she spent her early years in refugee camps. 
                At just six years old, she arrived in the UK, carrying both the weight of her past and the 
                dreams of a brighter future.
              </p>
              
              <p>
                Growing up, anxiety was a constant companion. She tried everything—therapy, medication, and 
                countless self-help approaches—but nothing truly freed her from the grip of fear and worry. 
                That all changed when she discovered mindfulness and the teachings of Eckhart Tolle. In presence, 
                she found the peace she had been searching for all her life. Anxiety and doubt gave way to deep 
                joy, clarity, and a profound sense of inner calm.
              </p>

              <p>
              As her transformation unfolded, friends and family began seeking her guidance, drawn to the peace and presence she radiated. Inspired to help others find the same freedom, she pursued formal training in mindfulness, including courses with Eckhart Tolle himself.
              </p>

              <p>
              Determined to make mindfulness accessible to all, Sainab wrote a children’s book to help young minds, especially those who have faced hardship, learn these life-changing skills early. She knows firsthand how powerful mindfulness can be in transforming fear into inner strength.
              </p>

              <p>
              Today, Sainab is dedicated to guiding others on their journey from anxiety to peace, from fear to freedom. With warmth, wisdom, and deep compassion, she helps people step into the present moment and discover the joy that has always been within them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeetTheWriter 