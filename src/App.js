import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss';

import Home from "./components/Home";
import List from "./components/List";
import {useSelector} from "react-redux";

export default function App() {

    const query = useSelector(state => state.app)


    return (
        <Router>
            <div>
                <Switch>
                    <Route exact={"/"} path={'/'} children={<Home />}/>
                </Switch>
                <Switch>
                    <Route path="/movies/:id" children={<List query={query} />}/>
                </Switch>
            </div>
        </Router>
    );
}
