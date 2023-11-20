import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav from "./../components/nav"
import Footer from "./../components/footer/footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mound Up 🎃',
  description: 'Sekx work in progress...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-moundUpWhite text-moundUpBlack text-base"}>
        <Nav />
          {children}
          <Footer/>
        </body>
    </html>
  )
}
