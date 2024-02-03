import './globals.css'
import { inter } from './fonts'
import { HeaderComponent } from './components/HeaderComponent'

export const metadata = {
  title: 'Search The Best Movies',
  description: 'Where you find the most popular movies to whatch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text`}>
        <HeaderComponent />
        <main className="max-container">
          {children}
        </main>
      </body>
    </html>
  )
}
