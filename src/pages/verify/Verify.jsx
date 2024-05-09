import React, { useContext, useEffect, useState } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
function Verify() {

    const[searchParams,setSearchParams]=useSearchParams()
    const success=searchParams.get("success")
    const orderId=searchParams.get("orderId")
    const{url}=useContext(StoreContext)
     const  naviagate=  useNavigate()
    const VerifyPayment=async()=>{
         const response= await axios.post(url+"/api/order/verify",{success,orderId})
         if(response.data.success){
            naviagate('/myorders')
         }else{
            naviagate('/')
         }
    }
    useEffect(()=>{
        VerifyPayment()
    },[])
  return (
    <div className='verify'>
        <div className='spinner'>
        </div>
    </div>
  )
}

export default Verify
