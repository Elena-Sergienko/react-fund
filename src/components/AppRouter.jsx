import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRouts, publicRouts} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ? <Routes>
                {privateRouts.map(route =>
                        <Route
                            path={route.path}
                            element={route.component}
                            exact={route.exact}
                            key={Math.random()}
                        />
                    )}
            </Routes>
            : <Routes>
                {publicRouts.map(route =>
                    <Route
                        path={route.path}
                        element={route.component}
                        exact={route.exact}
                        key={Math.random()}
                    />
                )}
            </Routes>


    );
};

export default AppRouter;