import { useState, useEffect } from "react"
import { getMovieById } from "../service/getMovies"

export const useMovieByID = (movieId) => {
    const [movie, setMovie] = useState({})
    
    useEffect(() => {
      getMovieById(movieId)
        .then(data => setMovie(data))
    }, [])

    return { movie }
}
