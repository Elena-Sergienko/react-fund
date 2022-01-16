import About from "../pages/About";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import React from "react";
import Login from "../pages/Login";

export const privateRouts = [
    {path: '/about', component: <About/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
    {path: '/', component: <Home/>, exact: true},
    {path: '/login', component: <Posts/>, exact: true},
    {path: '/*', component: <Error/>, exact: false},
]

export const publicRouts = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/about', component: <About/>, exact: true},
    {path: '/', component: <Home/>, exact: true},
    {path: '/*', component: <Login/>, exact: false},
]