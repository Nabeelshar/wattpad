import './globals.css'
import { Lato } from 'next/font/google'
import { ThemeProvider } from "@/components/ThemeProvider"
import Header from './components/Header'
import Footer from './components/Footer'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'Wattpad - Where stories live',
  description: 'Wattpad clone - Read and write stories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

