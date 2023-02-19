import React from "react";
import  "./Header.css"
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { useStateValue } from "../../provider/stateProvider";



export default function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header w-100 " >
      <div className="d-flex justify-content-evenly w-100">
      <NavLink to="/" style={{textDecoration :"non"}} >
      <Stack className="header-logo" direction="row" alignItems="center" spacing={1}>
          <StorefrontIcon className="header_logoImag text-warning" fontSize="large" />

          <h3 >e SHOP</h3>
        </Stack>
        </NavLink>
        
        <Stack className="header_search w-50  "  alignItems="center"direction="row">
          <input type="text" className="header_searchInput " />
          <SearchIcon className="headerSearchIcon text-black  bg-warning" />
        </Stack>
        <Stack className="nav_item" direction="column">
          <span className="nav_itemLineOne ">Hello Guest</span>
          <span className="nav_itemLineTow ">Sign Up</span>
        </Stack>
        <Stack className="nav_item" direction="column">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTow">Shop</span>
        </Stack>
        
        <div className="nav_item d-flex align-items-center" >
        <NavLink  to="/checkout"  style={{textDecoration:"non"}}> <ShoppingBasketIcon className=" basketIcon" /></NavLink>

          <span className="basket_count">{basket.length}</span>
        </div>
        
       
      </div>
    </div>
  );
}
