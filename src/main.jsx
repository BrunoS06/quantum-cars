import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  createBrowserRouter, Router, RouterProvider } from 'react-router-dom'; 
import Home from './components/pages/Home.jsx';
import Breaker from './components/pages/Breaker.jsx';
import Elegance from './components/pages/Elegance.jsx';
import Beast from './components/pages/beast.jsx';
import End from './components/pages/End.jsx';
const router = createBrowserRouter([
  {path:"/", element: <App />,
  children: [
    {path: "/", element: <Home />,},
    {path: "/breaker", element: <Breaker />,},
    {path: "/elegance", element: <Elegance />,},
    {path: "/beast", element: <Beast />,},
    {path: "/end", element: <End />,},
]} 
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
