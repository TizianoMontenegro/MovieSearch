import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <header className='w-full bg-black text-white undershadowline'>
          <nav className='max-container h-12 px-4 flex gap-8 items-center'>
            <span>MovieLOGO</span>
            
            <ul className='flex gap-4'>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/movies">Our Movies</Link>
              </li>

              <li>About Us</li>

              <li>Contact Us</li>
            </ul>
          </nav>
        </header>
        <main className="max-container">
          {children}
        </main>
      </body>
    </html>
  )
}
