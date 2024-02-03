"use client"
import {MovieComponent} from '../../../components/MovieComponent'

const Movie = ({params}) => {
  const movieId = params.id
  
  return (
    <MovieComponent movieId={movieId}/>
  )
}
  
export default Movie