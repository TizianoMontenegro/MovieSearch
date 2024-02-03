import { useMovieByID } from "../hooks/useMovieByID"
import { BackIcon } from "@/app/assets/icons/icons"
import Link from "next/link"

export const MovieComponent = ({movieId}) => {
    const  {movie} = useMovieByID(movieId)
    return (
        <section className="max-small-container flex gap-6 py-10 justify-center items-center max-lg:flex-col">
            <div>
                <Link href="/movies" title="Go back" className="inline-block border white p-1 rounded-sm cursor-default hover:bg-gray-900 hover:border-color1 transition-colors self-start lg:hidden mb-3">
                    <BackIcon />
                </Link>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={320} height={480} alt={movie.title + " image"} className="min-w-[320px] h-[480px] object-cover rounded-sm max-sm:hidden" />
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={300} height={300} alt={movie.title + " image"} className="min-w-max h-[300px] object-cover rounded-sm lg:hidden" />
            </div>
            <article>
                <Link href="/movies" title="Go back" className="inline-block border white p-1 rounded-sm cursor-default hover:bg-gray-900 hover:border-color1 transition-colors max-lg:hidden">
                    <BackIcon />
                </Link>
                <h1 className="text-5xl my-6 font-mono max-lg:text-center">{movie.title}</h1>
                <h4 className="text-xl lg:text-xl text-gray-400 lg:font-thin max-sm:text-center">Release date: {new Date(movie.release_date).toLocaleDateString()}</h4>
                <div className="flex gap-2 items-center flex-wrap my-4 max-sm:justify-center max-sm:text-center">
                    <span className="text-xl lg:text-xl text-gray-400 lg:font-thin max-sm:text-center">Genres: </span>
                    {movie?.genres?.map(genre => (
                        <span variant="outline" key={genre.id} className="text-gray-400 underline max-sm:text-center">
                            {genre?.name}
                        </span>
                    ))}
                </div>
                <p className="text-xl lg:text-xl text-gray-400 lg:font-thin my-3 max-sm:text-center">Rating: {movie.vote_average}/10</p>
                <p className="text-xl lg:text-xl text-gray-400 lg:font-thin max-w-lg max-sm:max-w-none max-sm:text-center">Overview: {movie.overview}</p>
            </article>
        </section>
    )
}
