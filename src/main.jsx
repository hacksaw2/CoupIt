import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Route,createRoutesFromElements,BrowserRouter, RouterProvider } from 'react-router-dom'
import Admin from './admin.jsx'
import Home from './Home.jsx'
import User from './User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/user' element={<User/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
