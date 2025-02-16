const MarqueeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden py-3 border-y border-[#4558a3]/20">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-1">
          <span className="mx-4 text-lg font-medium text-[#4558a3]">✨ Limited Spaces Available!</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Book Your Spot Now</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Don't Miss Out</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Join Us for this Special Event</span>
          <span className="mx-4 text-emerald-600">•</span>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
          <span className="mx-4 text-lg font-medium text-[#4558a3]">✨ Limited Spaces Available!</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Book Your Spot Now</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Don't Miss Out</span>
          <span className="mx-4 text-emerald-600">•</span>
          <span className="mx-4 text-lg font-medium text-[#4558a3]">Join Us for this Special Event</span>
          <span className="mx-4 text-emerald-600">•</span>
        </div>
      </div>
    </div>
  )
}

export default MarqueeBanner 