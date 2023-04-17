import {useEffect, useState} from "react";
import axios from "axios";

export const useMovieApi = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://www.omdbapi.com/?t=${searchTerm}&apikey=6cdfc728`);
            const data = await response.json();
            setResults(oldArray => [data,...oldArray] );
            console.log(data)
        }
        fetchData();

        if (searchTerm == "") {
            setResults([])
        }
    }, [searchTerm]);




    return {searchTerm, setSearchTerm, results, setResults}

}