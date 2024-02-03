import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeaderComponent = () => {
  return (    
    <header className='w-full bg-black text-white mb-12 flex justify-center'>
        <nav className='max-container h-12 px-4 flex gap-12 justify-center max-sm:justify-between items-center fixed top-0 undershadowline-nav z-40 bg-background'>
            <span>LampMovie</span>
            
            <div className='flex'>
                <label htmlFor="bars" className="text-3xl sm:hidden">=</label>
                <input type="checkbox" id="bars" name="bars" className="sm:hidden bg-background checkbox-mobile-menu"/>

                <ul className='flex gap-3 max-sm:gap-12 max-sm:bg-background max-sm:bg-opacity-80 max-sm:fixed max-sm:top-12 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:pt-14 max-sm:min-h-screen max-sm:z-40 transition-transform'>
                    <li>
                        <Link href="/">
                            <Button variant="link" className="text-white max-sm:text-lg">Home</Button>
                        </Link>
                    </li>

                    <li>
                        <Link href="/movies">
                            <Button variant="link" className="text-white max-sm:text-lg">Movies</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
  </header>
  )
}
