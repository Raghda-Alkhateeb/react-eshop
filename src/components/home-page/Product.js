import React from 'react'
import { useStateValue } from '../../provider/stateProvider';
import "./product.css"

export default function Product(props) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
      dispatch({
          type: "ADD_TO_BASKET",
          item: {
              id: props.id,
              image: props.image,
              title: props.title,
              price: props.price,
              rating: props.rating,
          },
      });
  };
  return (
    <div>
        <div className="product  ">
            <p className="product-info ">{props.title}</p>
            <p className="product-price fw-bold text-start"> {Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(props.price)}</p>
            <div className="product-rating d-flex text-start"> {Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                    </div>
     
                <img src={props.image} alt="" />
           
            <button className='bg-warning' onClick={addToBasket}>Add To Basket</button>
        </div>
    </div>
  )
}
