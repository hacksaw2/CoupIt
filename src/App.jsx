import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet,NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="navbar h-16 bg-[#ECDFCC] flex  shadow-sky-400 w-[100vw]">

  <div className="left w-[65vw] flex ">

<svg
  width="100"
  height="100"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className='h-16 w-16 '
>
  
  <circle cx="50" cy="50" r="40" fill="#FF9800" />
  
  
  <rect x="30" y="35" width="40" height="30" rx="5" fill="white" />
  
  
  <circle cx="30" cy="50" r="3" fill="#FF9800" />
  <circle cx="70" cy="50" r="3" fill="#FF9800" />
  

  <text x="38" y="55" font-size="16" font-weight="bold" fill="#FF9800">% OFF</text>
</svg>
<p className='mt-5 font-semibold text-xl text-orange-500'>CoupIt</p>
</div>

<div className="right mr-2 ">

  <ul className='flex items-center h-16 gap-4 lg:gap-20 lg:text-lg'>



    <NavLink to='/admin'><li className='font-bold flex '>
      
    <svg
    className='h-8 w-8 invisible'
  width="150"
  height="150"
  viewBox="0 0 150 150"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  
  <circle cx="75" cy="75" r="70" fill="#E67E22" stroke="#D35400" stroke-width="5" />

  
  <circle cx="75" cy="55" r="20" fill="#FDE3A7" />
  <path
    d="M50 110C50 90 100 90 100 110"
    stroke="#FDE3A7"
    stroke-width="8"
    stroke-linecap="round"
  />

  
  <path
    d="M75 85L55 100V115L75 125L95 115V100L75 85Z"
    fill="#E74C3C"
    stroke="#C0392B"
    stroke-width="4"
  />
  
</svg>

 <p className='mt-1 text-orange-500'>Admin</p></li></NavLink>



    <NavLink to='/user'><li className='font-bold text-orange-500'>User</li></NavLink>


    <li className='font-bold text-orange-500'>Help?</li>



  </ul>

  </div>
  
</div>

<Outlet/>
      
    </>
  )
}

export default App
