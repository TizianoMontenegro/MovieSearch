import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMovies } from "../hooks/useMovies"

export const MoviesComponent = () => {
    const { page, updatePage, movies, nameSearch, updateNameSearch } = useMovies()

    return (
        <article>
            <section className="flex flex-col items-center py-14 min-padding-x text-center">
                <h1 className='text-8xl max-sm:text-6xl my-6 font-bold'>Explore The Most Popular <span className="text-gradient">Movies</span></h1>
                <p className="text-xl max-sm:text-base">If you are interesed by a movie just click on it and you will have more information 🤯.</p>
            </section>

            <section className="flex justify-center gap-4 min-padding-x my-8">
                <input type="search" value={nameSearch} onChange={e => updateNameSearch(e.target.value)} placeholder='Fast and Furiuos, Spider Man, ...' className="w-full h-10 border pl-3 bg-background outline-none rounded-sm focus:border-color3" />
            </section>

            <section>
                <ul className='w-full grid grid-cols-1 gap-4 max-sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center content-center'>
                    {Array.isArray(movies)
                        ?
                        movies.map(movie => (
                            <li key={movie.id}>
                                <Link href={`/movies/id/${movie.id}`} className='rounded shadow-md flex justify-between items-center relative overflow-hidden'>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='hover:scale-110 transition-transform mx-auto' />
                                </Link>
                            </li>
                        )) : null}
                </ul>
            </section>

            <section className="flex justify-center items-center gap-4 my-8">
                <Button variant="outline" size="icon" onClick={() => updatePage(page - 1)} className="bg-background" disabled={page === 1}>&lt;</Button>
                <p>Page {page}</p>
                <Button variant="outline" size="icon" onClick={() => updatePage(page + 1)} className="bg-background">&gt;</Button>
            </section>
        </article>
    )
}
