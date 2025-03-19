import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Admin = () => {
  const navigate =  useNavigate();


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:5000/admin',{username,password})
    .then((result)=>{console.log("This is result",result)

    if(result.data.success){
      navigate('/home')
    }else{
      console.log("Wrong Password")
    }

    })

  }

 

  return (

    <div className="c bg-[#697565] h-[90vh]">
    <div className='flex justify-center items-center h-[50vh] lg:h-[70vh]'>
      <div className="box border-6 border-[#3C3D37] shadow-xl  w-80 h-60 lg:w-80 lg:h-80 flex   items-center">
        <form onSubmit={handleSubmit} className='ml-4 text-lg' >

            <div className="name flex mb-3">
                <strong className='text-xl'>Name :</strong>
<input className='ml-1 w-40 border-[0.1px] text-center'  placeholder='Name' value={username} onChange={(e)=> setUsername(e.target.value)}/>


            </div>

<div className="password mb-3 ">
    <strong>Password :</strong>
<input className='w-40 ml-1  border-[0.1px] text-center ' placeholder='******' type='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
</div>

<button className='bg-yellow-800 p-1 rounded-md text-[#ECDFCC]'>Submit</button>

        </form>
      </div>
    </div>
    </div>
  )
}

export default Admin
