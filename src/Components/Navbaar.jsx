import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'


import "./Navbaar.css"
import Clothes from './Clothes'
import Fav from './Fav'
import Home from './Home'

const Navbaar = () => {
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
    <Route path='/clothes' element={<Clothes/>}/>
    <Route path='/favorites' element={<Fav/>}/>
</Routes>
   </>


  )
}

export default Navbaar