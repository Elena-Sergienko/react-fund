import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "../../../pages/About";
import Posts from "../../../pages/Posts";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>


            </div>

        </nav>

    );
};

export default Navbar;