import { StrictMode, Suspense , lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Categorymeals from './components/Categorymeals.jsx'
import MealDetail from './components/MealDetail.jsx'
// import Contact from './components/Contact.jsx'
import ShimmerUi from './components/ShimmerUi.jsx'
import Cart from './components/Cart.jsx'
import Parent from './components/Parent.jsx'


const Contact = lazy(()=>import("./components/Contact.jsx"))
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
        element:<Suspense fallback={<ShimmerUi/>}> <Contact/> </Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/parent",
        element:<Parent/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
