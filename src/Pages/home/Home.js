import React from 'react'
import Product from '../../components/home-page/Product'
import "./home.css"
function Home() {
  return (
    <div className='home my-auto'>
      <div className="home-container  my-auto">
        <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      .
      <div className="home-row ">
       <Product/>
       <Product/>
      </div>
      
      <div className="home-row ">
       <Product/>
       <Product/>
       <Product/>

      </div>
      <div className="home-row ">
       <Product/>
       <Product/>

      </div>

      </div>
    </div>
  )
}

export default Home
