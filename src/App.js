import React from 'react';
import {SearchIcon} from "./Icon";
import {useMovieApi} from "./hooks/useMovieApi";
import Search from "./components/Search";


export default function App() {


    return (
        <Homepage />
    );
}


const Homepage = () => {


    const {searchTerm, results, setSearchTerm} = useMovieApi()

    return (
        <div className="App" style={{minHeight: "1000px"}}>
            <div className={`grid h-screen place-items-center ${searchTerm && 'h-[40vh]'}`}>
                <div className="w-[800px] mx-auto flex justify-center relative flex-col gap-y-4">
                    <input type="text"
                           className="border-2 p-3 outline-none placeholder-black h-15 rounded-xl bg-white w-full px-4"
                           value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                           placeholder="Bulmak istediğiniz filmin adını yazınız"/>
                    <span className="absolute right-3 top-2">
                <SearchIcon size={32}/>
            </span>

                    {searchTerm
                        &&
                        <div className={"container flex flex-col relative cursor-pointer"}>
                            <div
                                className={"absolute top-20 overflow-x-hidden overflow-y-scroll max-h-[500px] bg-white px-12 rounded shadow border-2"}>
                                {results.slice(0, 2).map((result) => (
                                    <Search img={result.Poster} title={result.Title}/>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}