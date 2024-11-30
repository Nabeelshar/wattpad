'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Bell, User, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DarkModeToggle } from './DarkModeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: "#", label: "Browse" },
    { href: "/write", label: "Write" },
    { href: "/story/1", label: "Story" },
    { href: "/story/1/chapter/1", label: "Read" },
    { href: "#", label: "Community" },
  ]

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            wattpad
          </Link>
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 dark:bg-gray-700 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:text-white"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <Link href="/auth" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
            <User className="w-6 h-6" />
          </Link>
          <button className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
            <Bell className="w-6 h-6" />
          </button>
          <DarkModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link key={item.label} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

