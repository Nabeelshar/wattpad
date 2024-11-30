import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Careers</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Help Center</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Safety</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Accessibility</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Copyright</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Facebook</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Twitter</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-orange-500">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © 2023 Wattpad Clone. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

