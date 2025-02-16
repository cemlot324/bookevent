import Image from 'next/image'

const BookPromotion = () => {
  return (
    <section className="py-20 bg-[#4558a3]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/9] w-full max-w-[600px] mx-auto">
              <Image
                src="/Book2.png"
                alt="Book cover"
                fill
                className="object-contain"
              />
            </div>
            
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3]">
                Get Your Free Ticket
              </h2>
              <p className="text-black text-lg leading-relaxed">
                Purchase a copy of the book and receive a complimentary ticket to the event. 
                Join us for an exclusive experience and be part of this special journey.
              </p>
              <div className="space-y-2 text-black">
                <p>✓ Exclusive event access</p>
                <p>✓ Meet the author</p>
                <p>✓ Special guest interaction</p>
              </div>
              <a 
                href="https://www.amazon.co.uk/Be-Here-Now-Mindfulness-little/dp/B0DPVQJ49J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#4558a3] text-white hover:bg-[#3a4b8c] font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Buy Book & Get Free Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookPromotion 