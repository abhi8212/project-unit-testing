import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kindori',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
