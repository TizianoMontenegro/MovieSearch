"use client"
import { BackIcon } from "@/app/icons/icons"
import { getMovieById } from "@/app/service/getMovies"
import Link from "next/link"
import { useEffect, useState } from "react"

const Movie = ({params}) => {
    const movieId = params.id
    const  [movie, setMovie] = useState({})
    
    useEffect(() => {
        getMovieById(movieId)
            .then(data => setMovie(data))
    }, [])
    return (
      <section className="max-small-container flex gap-6 py-10 justify-center items-center max-lg:flex-col">
        <div>
        <Link href="/movies" title="Go back" className="inline-block border border white p-1 rounded-sm cursor-default hover:bg-gray-900 hover:border-color1 transition-colors self-start lg:hidden mb-3">
            <BackIcon />
        </Link>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={320} height={480} alt={movie.title + " image"} className="min-w-[320px] h-[480px] object-cover rounded-sm max-lg:hidden"/>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={512} height={600} alt={movie.title + " image"} className="min-w-max h-[600px] object-cover rounded-sm lg:hidden"/>
        </div>
        <article>
          <Link href="/movies" title="Go back" className="inline-block border border white p-1 rounded-sm cursor-default hover:bg-gray-900 hover:border-color1 transition-colors max-lg:hidden">
              <BackIcon />
          </Link>
          <h1 className="text-5xl my-6 font-mono">{movie.title}</h1>
          <h4 className="text-2xl lg:text-xl text-gray-400 lg:font-thin">Release date: {new Date(movie.release_date).toLocaleDateString()}</h4>
          <p className="text-2xl lg:text-xl text-gray-400 lg:font-thin my-3">Rating: {movie.vote_average}/10</p>
          <p className="text-2xl lg:text-xl text-gray-400 lg:font-thin max-w-lg max-sm:max-w-none">Overview: {movie.overview}</p>
        </article>
      </section>
    )
  }
  
  export default Movie