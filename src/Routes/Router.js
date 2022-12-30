import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../Components/AddTask/AddTask';
import CompeletedTask from '../Components/CompeletedTask/CompeletedTask';
import Error from '../Components/Error/Error';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';
import MyTask from '../Components/MyTask/MyTask';
import Main from '../Layouts/Main';
import Privaterout from './Privaterout';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/myTask',
                element: <Privaterout><MyTask />,</Privaterout>
                // loader: () => fetch(`http://localhost:5000/allTask?email=${user?.email}`)
            },
            {
                path: '/addTask',
                element: <Privaterout><AddTask /></Privaterout>
            },
            {
                path: '/compeletedTask',
                element: <Privaterout><CompeletedTask /></Privaterout>
            },
        ]
    },
    {
        path: '*',
        element: <Error />
    }
]) 