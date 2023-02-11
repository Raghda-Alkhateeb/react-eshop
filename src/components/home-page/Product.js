import React from 'react'
import "./product.css"
export default function Product() {
  return (
    <div>
        <div className="product d-flex flex-column align-items-center ">
            <p className="product-info"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eum repellat ipsam amet, magni at quibusdam porro voluptate. Eum, dolores.</p>
            <p className="product-price">30$</p>
            <div className="product-rating d-flex">⭐⭐⭐</div>
            <div className="product-img">
                <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <button className='bg-warning'>Add To Basket</button>
        </div>
    </div>
  )
}
