'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { ChevronLeft, ChevronRight, List, Share2, MessageSquare, Star, Plus, Volume2, AlignLeft, Moon } from 'lucide-react'

const chapters = [
  { id: 1, title: "The Discovery" },
  { id: 2, title: "Secrets Unveiled" },
  { id: 3, title: "The Journey Begins" },
  { id: 4, title: "Unexpected Allies" },
  { id: 5, title: "The First Clue" },
]

export default function ChapterPage({ params }: { params: { id: string, chapterId: string } }) {
  const [fontSize, setFontSize] = useState(16)
  const chapterId = parseInt(params.chapterId)
  const chapter = chapters.find(c => c.id === chapterId) || chapters[0]

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/story/${params.id}`}>
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Back to story</span>
            </Link>
          </Button>
          <span className="ml-2 text-sm font-medium text-gray-500">
            Chapter {chapter.id}: {chapter.title}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <List className="h-5 w-5" />
            <span className="sr-only">Table of contents</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Share2 className="h-5 w-5" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Chapter {chapter.id}: {chapter.title}</h1>
        <div className="prose max-w-none">
          <p>
            The sun beat down mercilessly on Dr. Emily Carter's back as she carefully brushed away layers of sand from the ancient artifact. Her heart raced with anticipation. Could this be the breakthrough she had been searching for all these years?
          </p>
          <p>
            As more of the object was revealed, Emily's excitement grew. The intricate patterns etched into its surface were unlike anything she had ever seen before. They seemed to shimmer and shift in the harsh desert light, as if alive with some hidden energy.
          </p>
          <p>
            "Professor! Come quick!" she called out to her mentor, Dr. James Thompson. "I think I've found something!"
          </p>
          <p>
            The older man hurried over, his eyes widening as he took in the sight of Emily's discovery. "My God," he whispered, kneeling down beside her. "This could change everything we know about ancient civilizations."
          </p>
          <p>
            As they worked to fully unearth the artifact, neither of them noticed the strange, pulsing glow emanating from its core. Little did they know, their discovery was about to set in motion a chain of events that would lead them on the adventure of a lifetime – and possibly to the lost city of Atlantis itself.
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 px-4 py-2 sticky bottom-0 z-10">
        <div className="container mx-auto max-w-2xl flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild className={chapterId === 1 ? 'invisible' : ''}>
            <Link href={`/story/${params.id}/chapter/${chapterId - 1}`}>
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous chapter</span>
            </Link>
          </Button>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Comments</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Star className="h-5 w-5" />
              <span className="sr-only">Vote</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
              <span className="sr-only">Add to library</span>
            </Button>
          </div>
          <Button variant="ghost" size="icon" asChild className={chapterId === chapters.length ? 'invisible' : ''}>
            <Link href={`/story/${params.id}/chapter/${chapterId + 1}`}>
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next chapter</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Reading Options */}
      <div className="fixed bottom-16 right-4 flex flex-col items-end space-y-2">
        <Button variant="outline" size="icon" onClick={() => setFontSize(prev => Math.min(prev + 1, 24))}>
          <AlignLeft className="h-4 w-4" />
          <span className="sr-only">Increase font size</span>
        </Button>
        <Button variant="outline" size="icon" onClick={() => setFontSize(prev => Math.max(prev - 1, 12))}>
          <AlignLeft className="h-3 w-3" />
          <span className="sr-only">Decrease font size</span>
        </Button>
        <Button variant="outline" size="icon">
          <Moon className="h-4 w-4" />
          <span className="sr-only">Toggle dark mode</span>
        </Button>
        <Button variant="outline" size="icon">
          <Volume2 className="h-4 w-4" />
          <span className="sr-only">Text-to-speech</span>
        </Button>
      </div>

      <style jsx global>{`
        .prose {
          font-size: ${fontSize}px;
        }
      `}</style>
    </div>
  )
}

