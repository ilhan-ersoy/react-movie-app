import { useMovieApi } from "../../hooks/useMovieApi";
import { GoArrowIcon, SearchIcon } from "../../Icon";
import MovieCard from "../Search";

import React from "react";
import { Link } from "react-router-dom";


const Homepage = () => {

    const { searchTerm, results, setSearchTerm } = useMovieApi()


    return (
        <div className="App" style={{ minHeight: "1000px" }}>
            <div className={`grid h-screen place-items-center ${searchTerm && 'h-[30vh]'}`}>
                <div className="w-[800px] mx-auto flex justify-center relative flex-col gap-y-4">
                    <input type="text"
                        className="border-2 p-3 outline-none placeholder-black h-15 rounded-xl bg-white w-full px-4"
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Bulmak istediğiniz filmin adını yazınız" />

                    <span className="absolute right-3 top-2">
                        {
                            !searchTerm
                                ?
                                <div>
                                    <SearchIcon size={32} />
                                </div>
                                :
                                <Link to={`/movies/${searchTerm}`} >
                                    <GoArrowIcon size={54} />
                                </Link>
                        }
                    </span>
                    {searchTerm
                        &&
                        <div className={"container flex flex-col relative cursor-pointer"}>
                            <div
                                className={"absolute top-20 overflow-x-hidden overflow-y-scroll max-h-[700px] bg-white px-12 rounded shadow border-2 w-full"}>
                                {results.slice(0, 2).map((result) => (
                                    <MovieCard img={result.Poster} title={result.Title} id={result.imdbID} />
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Homepage;