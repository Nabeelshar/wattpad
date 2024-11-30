import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, we're Wattpad</h1>
            <p className="text-xl mb-8">The world's most-loved social storytelling platform</p>
            <Link href="#" className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={`/placeholder.svg?height=240&width=160&text=Cover ${i + 1}`} alt={`Story ${i + 1}`} width={160} height={240} className="w-full" />
                <div className="p-4">
                  <h3 className="font-semibold mb-1">Story Title</h3>
                  <p className="text-sm text-gray-600">by Author Name</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="#" className="text-orange-500 font-semibold inline-flex items-center hover:underline">
              See more stories <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Romance', 'Science Fiction', 'Mystery', 'Fantasy', 'Horror', 'Adventure', 'Humor', 'Non-Fiction'].map((category, i) => (
                <Link key={i} href="#" className="bg-gray-100 rounded-lg p-6 text-center hover:bg-gray-200 transition duration-300">
                  <h3 className="font-semibold">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Join the Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Connect with Readers</h3>
                <p className="text-gray-600 mb-4">Share your stories and get feedback from millions of readers worldwide.</p>
                <Link href="#" className="text-orange-500 font-semibold inline-flex items-center hover:underline">
                  Start writing <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Discover New Worlds</h3>
                <p className="text-gray-600 mb-4">Explore millions of free stories from talented writers around the globe.</p>
                <Link href="#" className="text-orange-500 font-semibold inline-flex items-center hover:underline">
                  Start reading <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-orange-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-xl mb-8">Join millions of readers and writers on Wattpad today.</p>
            <Link href="#" className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
              Sign Up Now
            </Link>
          </div>
        </section>
      </div>
    )
  }

