import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";


export const useMovieApi = (id) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [movies, setMovies] = useState(null);
    
    const distpach = useDispatch();
    const query = useSelector(state => state.app.data)

 


    useEffect(() => {
        const url = `https://www.omdbapi.com/?s=${id}&apikey=6cdfc728`; // OMDB API URL'si

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                distpach(setMovies(data))
            })
            .catch(error => console.log(error));
    }, [id]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=6cdfc728`);
            const data = await response.json();
            if (data.Response === "True") setResults(oldArray => [data,...oldArray] );
            
        }
        fetchData().then(r => {});

        if (searchTerm === "") {
            setResults([])
        }
    }, [searchTerm]);
    

    return {searchTerm, setSearchTerm, results, setResults, movies}
}