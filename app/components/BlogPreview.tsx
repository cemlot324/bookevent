'use client'

import Image from 'next/image'
import Link from 'next/link'

const blogPosts = [
  {
    id: 'mindfulness-for-children',
    title: 'Mindfulness for Kids: The Missing Piece in Upbringing and Education ',
    excerpt: 'Discover simple and effective mindfulness techniques that you can practice with your children at home. From breathing exercises to sensory activities, learn how these practices can help develop focus, emotional regulation, and overall well-being.',
    image: '/Blog1.png',
    readTime: '5 min read',
    date: 'February 11, 2025'
  },
  {
    id: 'benefits-of-meditation',
    title: 'The Benefits of Early Meditation Practice',
    excerpt: 'Explore how introducing meditation to young minds can create lasting positive impacts on their development, learning abilities, and emotional intelligence.',
    image: '/mindfulness2.jpg',
    readTime: '4 min read',
    date: 'February 18, 2024'
  },
  {
    id: 'calming-techniques',
    title: 'Simple Calming Techniques for Busy Kids',
    excerpt: 'Learn practical and fun exercises that can help children find their calm during busy or stressful moments. Perfect for school, home, or anywhere in between.',
    image: '/mindfulness3.jpg',
    readTime: '6 min read',
    date: 'February 15, 2024'
  }
]

const BlogPreview = () => {
  return (
    <section className="py-20 bg-[#4558a3]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-black/80">
              Learn more about mindfulness for children
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Link 
              href="/blog/mindfulness" 
              className="group block"
            >
              <article className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{blogPosts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#4558a3] mb-3 group-hover:text-[#3a4b8c]">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="text-[#4558a3] font-medium group-hover:text-[#3a4b8c] flex items-center">
                    Read full article 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview 