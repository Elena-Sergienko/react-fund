import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>Not Found</h1>
            <Link to="/">Go to the home page</Link>

        </div>
    );
};

export default Error;