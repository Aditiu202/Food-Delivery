import React, { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets';

const Carts = () => {
  const[carditem,addToCard,removecarditem] =useState(StoreContext);

  return (
    <div className="cart">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quality</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>

        {food_list.map((item,index)=>{
          if(carditem[item._id>0]){
            return(
              <div className='card-items-title card-items-item'>
               
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Carts