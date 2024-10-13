import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Quote from './Screens/Quote/Quote'
import Home from './Screens/Home/Home'
import Contact from './Screens/Contact/Contact'
import Food from './Screens/Food/Food'
import Resturants from './Screens/Resturants/Resturants'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Notfound from './components/NotFound/Notfound'
import Layout from './components/Layout/Layout'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement : <Notfound/>,
      children : [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/quote",
          element: <Quote/>
        },
        {
          path: "/food",
          element: <Food/>
        },
        {
          path: "/resturants",
          element: <Resturants/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <>
  <RouterProvider router={router}/>
    </>
  )
}

export default App
