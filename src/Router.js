import React from 'react'
import Home from "./Pages/home/Home";
import Checkout from "./Pages/checkout/Checkout";
import { Routes,Route  } from "react-router-dom";

 function Router() {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </div>
  )
}
export default Router
