import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Titillium_Web } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const montserrat = Montserrat({ subsets: ['latin'] })
const titillium = Titillium_Web({ subsets: ['latin'], weight:'400' })

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: 'Super Pepe Race',
    description: "The most thrilling and unique car racing experience you've ever seen!",
    metadataBase: new URL('https://www.peperaceonsol.xyz'),
    openGraph: {
      title: 'Super Pepe Race',
      description: "The most thrilling and unique car racing experience you've ever seen!",
      images: '/ppraceLogo.png',
    },
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={titillium.className}>
        <Toaster/>
        {children}
        </body>
    </html>
  )
}
