const CompetitionBanner = () => {
  return (
    <section className="bg-[#4558a3] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#4558a3]">
              🎉 Special Prize Draw! 🎉
            </h2>
            
            <div className="space-y-4 text-black/80">
              <p className="text-lg">
                Be one of the first 50 people to book your tickets and enter our exclusive prize draw!
              </p>
              
              <div className="bg-[#4558a3]/5 p-4 rounded-xl border border-[#4558a3]/10">
                <p className="font-semibold text-[#4558a3]">
                  5 Lucky Attendees Will Win:
                </p>
                <p className="text-lg mt-2">
                  A Personally Signed Copy of &quot;Be Here Now&quot;
                </p>
              </div>

              <p className="text-sm text-black/60 mt-4">
                Winners will be announced during the event. Make sure to book your tickets early to qualify!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitionBanner 