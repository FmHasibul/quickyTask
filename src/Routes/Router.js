import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../Components/AddTask/AddTask';
import CompeletedTask from '../Components/CompeletedTask/CompeletedTask';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Login/Register';
import MyTask from '../Components/MyTask/MyTask';
import Main from '../Layouts/Main';


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
                element: <MyTask />
            },
            {
                path: '/addTask',
                element: <AddTask />
            },
            {
                path: '/compeletedTask',
                element: <CompeletedTask />
            },
        ]
    }
]) 