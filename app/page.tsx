import Hero from './components/Hero'
import LastSpotsBanner from './components/LastSpotsBanner'
import EventInfo from './components/EventInfo'
import MeetTheWriter from './components/MeetTheWriter'
import CountdownTimer from './components/CountdownTimer'
import SpecialGuest from './components/SpecialGuest'
import BookPromotion from './components/BookPromotion'
import Organisers from './components/Organisers'
import Newsletter from './components/Newsletter'
import Questions from './components/Questions'
import Footer from './components/Footer'
import BlogPreview from './components/BlogPreview'
import SocialBanner from './components/SocialBanner'

export default function Home() {
  const eventDate = new Date('2025-03-09T15:00:00.000Z')

  return (
    <main className="font-baskerville">
      <SocialBanner />
      <LastSpotsBanner />
      <Hero />
      <CountdownTimer targetDate={eventDate} />
      <EventInfo />
      <MeetTheWriter />
      <BookPromotion />
      <SpecialGuest />
      <Questions />
      <Organisers />
      <Newsletter />
      <BlogPreview />
      <Footer />
    </main>
  )
}
