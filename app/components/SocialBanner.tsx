import { FaInstagram, FaFacebook } from 'react-icons/fa'

const SocialBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#4558a3] text-white py-1">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-6">
          <span className="hidden sm:block font-medium">Follow us on social media:</span>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/beherenow.littlemind/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FaInstagram className="text-xl" />
              <span className="sm:hidden">Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573000685559"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FaFacebook className="text-xl" />
              <span className="sm:hidden">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialBanner 