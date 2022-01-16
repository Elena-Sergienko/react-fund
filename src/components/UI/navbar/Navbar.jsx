import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link to="/posts">🗱 Posts |</Link>
                <Link to="/about">⎙ About |</Link>
                <Link to="/"> 🏠 Home</Link>
            </div>

        </nav>

    );
};

export default Navbar;