import { API_KEY, POPULAR_MOVIES_URL, SEARCH_COLLECTION_MOVIES_URL } from "../constants"

export const getMoviesInfo = async (page = 1) => {
    const data = await fetch(`${POPULAR_MOVIES_URL}?language=en-US&page=${page}&api_key=${API_KEY}`)
    const res = await data.json()
    return res
}
  
export const getMovies = async (page = 1) => {
    const data = await getMoviesInfo(page)
    console.log(data)
    return data
}

export const getMoviesByName = async (page = 1, name = "") => {
    const data = await fetch(`${SEARCH_COLLECTION_MOVIES_URL}?query=${name}&page=${page}&api_key=${API_KEY}`)
    const res = await data.json()
    console.log(res)
    return res
}
