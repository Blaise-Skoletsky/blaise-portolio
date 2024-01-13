import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blaise Skoletsky',
  description: 'My personal portfolio',
  meta: {
    charSet: 'utf-8',
  },
}

export default function RootLayout({ children }) {
  return (
   
  <html lang="en">
    <head>
      <body className="w-full h-screen bg-gradient-to-r from-indigo-500 from-33% via-purple-500 via-33% to-pink-500 to-33%">{children}</body>
    </head>
  </html>
  )
}
