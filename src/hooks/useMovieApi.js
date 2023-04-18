import {useEffect, useState} from "react";

export const useMovieApi = (id) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const url = `http://www.omdbapi.com/?s=${id}&apikey=6cdfc728`; // OMDB API URL'si

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovies(data);
            })
            .catch(error => console.log(error));
    }, [id]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=6cdfc728`);
            const data = await response.json();
            setResults(oldArray => [data,...oldArray] );
            console.log(data)
        }
        fetchData().then(r => {});

        if (searchTerm === "") {
            setResults([])
        }
    }, [searchTerm]);




    return {searchTerm, setSearchTerm, results, setResults, movies}

}