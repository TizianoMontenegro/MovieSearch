import { useState, useEffect } from "react"
import useDebounce from "./useDebounce"
import { getMoviesByName, getMovies } from "../service/getMovies"

export const useMovies = () => {
    const [page, setPage] = useState(1)
    const [movies, setMovies] = useState([])

    const [nameSearch, setNameSearch] = useState("")
    const debouncedNameSearch = useDebounce(nameSearch, 500)

    function updatePage(page) {
        setPage(page)
    }
    function updateNameSearch(newName) {
        setNameSearch(newName)
    }

    useEffect(() => {
        if(nameSearch !== "" && !nameSearch.startsWith(" ")) {
            getMoviesByName(page, nameSearch)
                .then(data => setMovies(data.results))
        }
        else {
            getMovies(page)
                .then(data => setMovies(data.results))
        }
    }, [page, debouncedNameSearch])

    return { page, updatePage, movies, nameSearch, updateNameSearch }
}
