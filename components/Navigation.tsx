import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            WattpadClone
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-700 hover:text-orange-500">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500">
              Browse
            </Link>
            <Link href="#" className="text-gray-700 hover:text-orange-500">
              Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

