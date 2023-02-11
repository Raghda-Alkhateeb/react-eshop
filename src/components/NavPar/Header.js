import React from "react";
import  "./Header.css"
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";


export default function Header() {
  return (
    <div className="header w-100 " >
      
      <div className="d-flex justify-content-evenly w-100">
        <Stack className="header-logo" direction="row" alignItems="center" spacing={1}>
          <StorefrontIcon className="header_logoImag text-warning" fontSize="large" />

          <h3>e Shop</h3>
        </Stack>
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
          <ShoppingBasketIcon className=" basketIcon" />

          <span className="basket_count">0</span>
        </div>
      </div>
    </div>
  );
}
