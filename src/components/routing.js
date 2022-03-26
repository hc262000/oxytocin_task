import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "../views/home";
import View from "../views/View";
import Dashboard from '../views/dashboard'

function Routing() {
    return (
        <>
        
        <Router >
            <Routes>
            <Route path="/" element={<Home {...{'path':'/'}}/>}>
                <Route path="/" element={<Dashboard />}/>
                <Route path=":id" element={< View {...{}}/>} />
            </Route>
            </Routes>
            
            
        </Router>
        </>
        
    );
}

export default Routing;