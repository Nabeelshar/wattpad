import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=100&width=100&text=User"
                alt="User Avatar"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <CardTitle>Jane Doe</CardTitle>
                <CardDescription>@jane_writer</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Aspiring writer with a passion for fantasy and science fiction. Always dreaming up new worlds and characters.</p>
            <div className="flex space-x-4 mb-6">
              <div>
                <strong className="text-lg">15</strong>
                <p className="text-sm text-gray-500">Stories</p>
              </div>
              <div>
                <strong className="text-lg">1.2K</strong>
                <p className="text-sm text-gray-500">Followers</p>
              </div>
              <div>
                <strong className="text-lg">500</strong>
                <p className="text-sm text-gray-500">Following</p>
              </div>
            </div>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="stories" className="mt-8">
          <TabsList>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="reading-lists">Reading Lists</TabsTrigger>
          </TabsList>
          <TabsContent value="stories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {[1, 2, 3].map((story) => (
                <Card key={story}>
                  <CardContent className="p-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=150&text=Story ${story}`}
                      alt={`Story ${story} Cover`}
                      width={150}
                      height={200}
                      className="mb-4 rounded-md"
                    />
                    <h3 className="font-semibold mb-2">Story Title {story}</h3>
                    <p className="text-sm text-gray-500 mb-2">Fantasy • 50K reads</p>
                    <Link href={`/story/${story}`} className="text-orange-500 hover:underline">
                      Read Now
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reading-lists">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {[1, 2, 3].map((list) => (
                <Card key={list}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Reading List {list}</h3>
                    <p className="text-sm text-gray-500 mb-2">10 stories</p>
                    <Link href="#" className="text-orange-500 hover:underline">
                      View List
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

