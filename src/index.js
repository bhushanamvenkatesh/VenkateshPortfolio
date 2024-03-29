import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import About from './components/About';
import Home from './components/Home';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/skills',
            element:<Skills/>
        },
        {
            path:'/work',
            element:<Work/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },

      ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
