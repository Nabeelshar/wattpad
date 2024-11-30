import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, Eye, List, Share2, Play, Plus } from 'lucide-react'

const story = {
  id: 1,
  title: "The Lost City of Atlantis",
  author: "JaneWriter",
  coverImage: "/placeholder.svg?height=300&width=200&text=Book Cover",
  description: "An archaeologist's quest to uncover the mythical city of Atlantis leads to unexpected discoveries and ancient secrets.",
  tags: ["Adventure", "Mystery", "Historical"],
  stats: {
    reads: "1.5M",
    votes: "100K",
    comments: "10.2K",
    parts: 23
  }
}

const chapters = [
  { id: 1, title: "The Discovery", reads: 150000 },
  { id: 2, title: "Secrets Unveiled", reads: 120000 },
  { id: 3, title: "The Journey Begins", reads: 100000 },
]

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Story Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src={story.coverImage}
                  alt={story.title}
                  width={200}
                  height={300}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-3xl font-bold mb-2 dark:text-white">{story.title}</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">by {story.author}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold dark:text-white">{story.stats.votes}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="dark:text-gray-300">{story.stats.comments}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="dark:text-gray-300">{story.stats.reads}</span>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{story.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Start Reading
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Library
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Table of Contents</h2>
            <ul className="space-y-4">
              {chapters.map((chapter) => (
                <li key={chapter.id} className="border-b dark:border-gray-700 pb-2">
                  <Link href={`/story/${story.id}/chapter/${chapter.id}`} className="flex justify-between items-center hover:text-orange-500 dark:hover:text-orange-400">
                    <span className="font-semibold dark:text-white">Chapter {chapter.id}: {chapter.title}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{chapter.reads.toLocaleString()} reads</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="link" className="mt-4">
              See all {story.stats.parts} parts
            </Button>
          </div>

          {/* Author's Note */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Author's Note</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Thank you for reading "The Lost City of Atlantis"! I've always been fascinated by ancient mysteries and the legend of Atlantis. This story is my attempt to bring that wonder and excitement to life. I hope you enjoy reading it as much as I enjoyed writing it. Don't forget to vote and comment if you like the story!
            </p>
          </div>

          {/* You May Also Like */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <Image
                    src={`/placeholder.svg?height=150&width=100&text=Book ${item}`}
                    alt={`Similar Book ${item}`}
                    width={100}
                    height={150}
                    className="rounded-md shadow-md mb-2"
                  />
                  <h3 className="font-semibold text-center dark:text-white">Similar Story {item}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">by Author {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

