import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useRef } from 'react'

const Home = () => {
const [couponId, setCouponId] = useState('')
  const [coupon, setCoupon] = useState('')
  const [type, setType] = useState('')
  const [expiry, setExpiry] = useState('')
  const [reward, setReward] = useState('')
  const [storedCoupons, setStoredCoupons] = useState([])

  const [disableButton, setDisableButton] = useState(false)

  // const element = useRef()

  // const changeView = ()=>{
  //   element.current.style.display = "block"
  // }


  

const handleSubmit = (e) =>{
  e.preventDefault();

  axios.post('http://localhost:5000/home',{couponId,coupon,type,expiry,reward})
  .then((result)=> console.log("this is your result",result))



  setCouponId('')
  setCoupon('')
  setType('')
  setExpiry('')
  setReward('')

}

useEffect(() => {
  axios.get('http://localhost:5000/home')
    .then((result) => {
      console.log("this is your result", result.data);
      setStoredCoupons(result.data); 
    })
    
}, []);

  




  return (
    <div>
      form

      <form onSubmit={handleSubmit}>

        <div className="couponID">
          <input placeholder='CouponId' value={couponId} onChange={(e)=> setCouponId(e.target.value)}/>
        </div>

         <div className="coupon-code">
        <input placeholder='Coupon Code' value={coupon} onChange={(e)=> setCoupon(e.target.value)}/>
        </div>

        <div className="discount-type">

          <input placeholder='discount-type' value={type} onChange={(e)=> setType(e.target.value)}/>
        </div>

        <div className="Expiry Date">
        <input placeholder='Expiry date' value={expiry} onChange={(e)=> setExpiry(e.target.value)} />
        </div>

        <div className="reward ">
          <input placeholder='Reward' value={reward} onChange={(e)=> setReward(e.target.value)}/>
        </div>

     <button className='bg-red-500 p-1  rounded-lg'>Submit</button>
      </form>

      {storedCoupons.map((item,index)=>(
  <div key={index} className="items  h-40 w-40 bg-yellow-400 text-black p-2 rounded-md">
 <p className=' bg-red-800 text-white text-center rounded-md'>{item.coupon}</p>
 <p className='text-center'>{item.type}</p>
 <p className='text-center'>{item.expiry}</p>
 <p className='text-center '  style={{display:""}}>{item.reward}</p>
 <button >Check</button>
 </div>
))}
      
    </div>
  )
}

export default Home
