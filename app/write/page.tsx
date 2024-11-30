'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Save, Settings, Book, List } from 'lucide-react'

const genres = [
  "Romance", "Science Fiction", "Mystery", "Fantasy", "Horror", 
  "Thriller", "Historical Fiction", "Contemporary", "Adventure", "Non-fiction"
]

export default function WritePage() {
  const [storyTitle, setStoryTitle] = useState("")
  const [chapterTitle, setChapterTitle] = useState("")
  const [chapterContent, setChapterContent] = useState("")

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <nav>
                <ul className="space-y-2">
                  <li>
                    <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 flex items-center justify-between">
                      <span>Chapter 1: The Beginning</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-100 flex items-center justify-between">
                      <span>Chapter 2: The Journey</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </li>
                  <li>
                    <Button variant="outline" className="w-full justify-start">
                      <List className="w-4 h-4 mr-2" />
                      Add New Chapter
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full lg:w-3/4">
            <Tabs defaultValue="write">
              <TabsList className="mb-4">
                <TabsTrigger value="write">Write</TabsTrigger>
                <TabsTrigger value="details">Story Details</TabsTrigger>
              </TabsList>
              <TabsContent value="write">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <Label htmlFor="chapter-title">Chapter Title</Label>
                    <Input 
                      id="chapter-title"
                      value={chapterTitle}
                      onChange={(e) => setChapterTitle(e.target.value)}
                      placeholder="Enter chapter title"
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="chapter-content">Chapter Content</Label>
                    <Textarea 
                      id="chapter-content"
                      value={chapterContent}
                      onChange={(e) => setChapterContent(e.target.value)}
                      placeholder="Start writing your chapter here..."
                      rows={20}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <Save className="w-4 h-4 mr-2" />
                      Save Chapter
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="details">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <Label htmlFor="story-title">Story Title</Label>
                    <Input 
                      id="story-title"
                      value={storyTitle}
                      onChange={(e) => setStoryTitle(e.target.value)}
                      placeholder="Enter story title"
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="story-description">Story Description</Label>
                    <Textarea 
                      id="story-description"
                      placeholder="Enter a brief description of your story"
                      rows={4}
                    />
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="story-genre">Genre</Label>
                    <Select>
                      <SelectTrigger id="story-genre">
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre.toLowerCase()}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-4">
                    <Label htmlFor="story-tags">Tags</Label>
                    <Input 
                      id="story-tags"
                      placeholder="Enter tags separated by commas"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button>
                      <Settings className="w-4 h-4 mr-2" />
                      Update Story Details
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

