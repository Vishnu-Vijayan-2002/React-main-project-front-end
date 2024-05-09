import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
 const navigate= useNavigate()
  const {cartItem,food_list,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titel</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item,index)=>{
            if(cartItem[item._id]>0){
              return(
                <div>
                  <div className='cart-items-title cart-items-item'>
                 <img src={url+"/images/"+item.image} alt="" />
                 <p>{item.name}</p>
                 <p>₹{item.price}</p>
                 <p>{cartItem[item._id]}</p>
                 <p>₹{item.price*cartItem[item._id]}</p>
                 <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
                </div>
              )
            }
          })
        }
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Devliver Fee</p>
              <p>₹{getTotalCartAmount()===0?0: getTotalCartAmount()===0?0:60}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/oder')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button style={{cursor:'pointer'}}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
