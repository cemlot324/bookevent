'use client'

const LastSpotsBanner = () => {
  // You can control this with an env variable or API call
  const showBanner = process.env.NEXT_PUBLIC_SHOW_LAST_SPOTS === 'true'

  if (!showBanner) return null

  return (
    <div className="bg-red-500 text-white py-3 px-4 text-center animate-pulse">
      <p className="text-sm md:text-base font-semibold">
        🚨 Only a Few Spots Remaining - Book Now to Avoid Disappointment! 🚨
      </p>
    </div>
  )
}

export default LastSpotsBanner 