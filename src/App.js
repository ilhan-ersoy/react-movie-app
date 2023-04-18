import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss';

import Home from "./components/Home";

import List from "./components/List";

export default function App() {

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={"/"} path={'/'} children={<Home />}/>
                </Switch>

                <Switch>
                    <Route path="/movies/:id" children={<List />}/>
                </Switch>

            </div>
        </Router>
    );
}

// const List = () => {
//     let {id} = useParams();

//     const {movies} = useMovieApi(id);

//     if (!movies) {
//         return <div>Loading...</div>;
//     }


//     return (
//         <div style={{backgroundColor: "#F7F9FD"}} className={"h-[1200px] w-full m-8 shadow rounded"}>
//             <div className={"flex justify-center"}>
//                 <div className={"flex flex-col gap-y-3 w-[300px]"}>
//                     <div className="flex items-center justify-between px-3 gap-x-2">
//                             <span className={"text-[#5883FF]"}>
//                                 Th için Sonuçlar
//                             </span>
//                             <div className={"text-xs opacity-50"}>
//                                 {movies.Search.length} film bulundu
//                             </div>
//                     </div>
//                     <div className={"w-full"} style={{backgroundColor: "#5883FF", height:2}}/>
//                 </div>
//             </div>
//         </div>
//     );
// }
