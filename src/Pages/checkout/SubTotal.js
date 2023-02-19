import React from "react";
import "./Subtotal.css";
import {getBasketTotal} from "../../provider/pasketReducer"
import { useStateValue } from "../../provider/stateProvider";


 
function Subtotal() {
    const [{basket},dispatch]= useStateValue();
    return (
        <div className="subtotal">
            
               
                  
                        <p>
                            Subtotal ({basket.length} items):<strong> { Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'USD' }).format(getBasketTotal(basket))} </strong>
                            
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
              
                
            

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
