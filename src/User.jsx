import React from 'react'
import axios from 'axios'
import { useEffect,useState,useRef } from 'react'

const User = () => {

    const [hero, setHero] = useState([])

    const disable  = useRef()

const handleButton = () =>{

  disable.current.style.display ="none"

}


    const handleSubmit = (e)=>{
      
        axios.get('http://localhost:5000/user',)
        .then(result =>{ console.log("This is your result",result.data);
        setHero(result.data)
    })

      

    }
        
        
        
     
   
    

  return (
    <div>
      <button onClick={()=>{handleSubmit();handleButton()}}  ref={disable} className='bg-purple-300 p-1 mt-1 'style={{display:""}}>Claim</button>

      {hero?.coupon ?
      <div>
       <p>Coupon Code: {hero.coupon}</p>
       <p>Coupon-type: {hero.type}</p>
       <p>Coupon-type: {hero.expiry}</p>
       <p>Coupon-reward:{hero.reward}</p>
      
       </div>
      
      
      : <p>No coupon claimed yet</p>}

    </div>
  )
}

export default User
