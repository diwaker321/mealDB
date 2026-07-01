import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Categorymeals from './components/Categorymeals.jsx'
import MealDetail from './components/MealDetail.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([ 
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/category/:categoryname',
        element:<Categorymeals/>
      },
      {
        path:'/mealdetails/:mealname/:mealId',
        element:<MealDetail/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
