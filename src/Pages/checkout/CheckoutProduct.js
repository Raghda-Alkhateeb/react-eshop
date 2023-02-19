import React from "react";
import { useStateValue } from "../../provider/stateProvider";
import "./checkoutProduct.css";

function CheckoutProduct(props) {
  const  [{basket},dispatch] =useStateValue()
  return (
    <div className="checkoutProduct ">
      <div className="checkoutProduct-img">
        <img
          src={props.image}
          alt=""
        />
      </div>
      <div className="checkoutProduct_info">
        <p className="checkoutProduct-info">
       { props.title}
        </p>
        <p className="checkoutProduct-price">
          {Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(props.price)}
        </p>
        <div className="checkoutProduct-rating">{Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}</div>

        <button className="bg-warning" onClick = {()=>{ dispatch({type:"REMOVE_FROM_BASKET", id: props.id})}}> Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
