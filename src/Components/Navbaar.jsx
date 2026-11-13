import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import { useState } from 'react'

import "./Navbaar.css"
import Clothes from './Clothes'
import Fav from './Fav'
import Home from './Home'

const Navbaar = () => {

    let [clothes,setClothes] = useState([])
  return (
   <>
    <nav className="navbar">

        <Link to ="#" className="logo">
            <span className="logo-icon">✦</span>
            FASHION<span>ISTA</span>
        </Link>

        <ul className="nav-links">
            <li> <Link to ="/" className="active">Home</Link></li>
            <li><Link to ="/clothes">Clothes</Link></li>
            <li><Link to ="/favorites">Favorites</Link></li>
        </ul>

        <div className="nav-actions">
            <button  className="login-btn"> LoGIn </button>
        </div>

    </nav>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/clothes' 
    element={<Clothes condition={true} API={"https://dummyjson.com/products/category/womens-dresses"}
     clothes={clothes}
    setClothes={setClothes} />}/>
    <Route path='/favorites' element={<Fav  clothes={clothes}
    setClothes={setClothes}/>}/>

  <Route  path='/dresses' element={<Clothes condition={false} API={"https://dummyjson.com/products/category/womens-dresses"}  clothes={clothes}
    setClothes={setClothes}/>} />
     <Route  path='/shirts' element={<Clothes condition={false} API={" https://dummyjson.com/products/category/mens-shirts"}  clothes={clothes}
    setClothes={setClothes}/>} />
        <Route  path='/bags' element={<Clothes condition={false}  API={"https://dummyjson.com/products/category/womens-bags"}  clothes={clothes}
    setClothes={setClothes}/>} />
        <Route  path='/shoes' element={<Clothes condition={false} API={"https://dummyjson.com/products/category/womens-shoes"}  clothes={clothes}
    setClothes={setClothes}/>} />
</Routes>
   </>


  )
}

export default Navbaar