import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
}from 'react-router-dom'
import Root from './components/Root'
import Home from './components/Nav/Home'
import Blog from './components/Nav/Blog'
import Profile from './components/Nav/Profile'
import About from './components/Nav/About'
import SignIn from './components/Sign/signup/SignIn'
import SignUp from './components/Sign/signup/SignUp'
import ContexApi from './components/ContexApi'
import PrivateRoute from './components/PrivateRoute'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ContexApi><RouterProvider router={router}/></ContexApi>
  </StrictMode>,
)