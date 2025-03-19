import express  from  'express'
import mongoose from 'mongoose'
import cors from 'cors'
import LeaderModel from './Leader.js'
import CouponModel from './Coupon.js'


const app = express()


app.use (express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Internship")

app.post('/admin',(req,res)=>{
    const {username,password} =  req.body;

    LeaderModel.findOne({username:username})
    .then(User=>{
        if(User){
            if(User.password === password){
                res.json({success:true})
            }else{
                res.json({success:false , message:"The password is incorrect"})
                console.log("Wrong password")
            }
        }
    })
})

app.post('/home',(req,res)=>{
    CouponModel.create(req.body)
    .then(Coupon =>{
        res.json(Coupon)
    })
})

app.get('/home',(req,res)=>{
    CouponModel.find()
    .then(Coupon=>{
        res.json(Coupon)
    })
})

app.get('/user',(req,res)=>{

    
    const randomNumber = Math.floor(Math.random() *10 ) + 1 ;

    CouponModel.findOne({couponId:randomNumber})
    .then(YourCoupon =>{
        res.json(YourCoupon)
    })

})

// const getIp = require('ipware')().get_ip;
// app.use((req,res,next)=>{
//     var ipInfo = getIP(req);
//     console.log("This is ip",ipInfo);

//    next();

// })




app.listen(5000,()=>{
    console.log("Your server is running")
})