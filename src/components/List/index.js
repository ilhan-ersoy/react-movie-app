import React from "react";
import {
    useParams
} from "react-router-dom";

import { useMovieApi } from "../../hooks/useMovieApi";
import MovieCard from "../Search";
import ThreeDotsWave from "../Loader";


const List = () => {
    let { id } = useParams();

    const { movies } = useMovieApi(id);

    console.log("movies:", movies)

    if (movies === null) {
        return (
            <div className="w-full m-30">
                <div>
                    NOT FOUND
                </div>
            </div>
        )
    }



    return (
        <div style={{ backgroundColor: "#F7F9FD" }} className={"p-10 w-full m-8 shadow rounded flex flex-col item-center"}>


            <>
                <div className={"flex justify-center"}>
                    <div className={"flex flex-col gap-y-3 w-[300px]"}>
                        <div className="flex items-center justify-between px-3 gap-x-2">
                            <span className={"text-[#5883FF]"}>
                                Arama için Sonuçlar
                            </span>
                            <div className={"text-xs opacity-50"}>
                                {movies?.Search?.length} film bulundu
                            </div>
                        </div>
                        <div className={"w-full"} style={{ backgroundColor: "#5883FF", height: 2 }} />
                    </div>
                </div>
                <div className="w-[50%] mx-auto grid grid-cols-2 justify-center flex my-20">
                    {movies?.Search?.map((movie) => (
                        <MovieCard title={movie.Title} id={movie.imdbID} img={movie.Poster} />
                    ))}
                </div>
            </>


        </div>
    );
}

export default List