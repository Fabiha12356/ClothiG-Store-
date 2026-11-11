import React from 'react'

import "./Navbaar.css"

const Navbaar = () => {
  return (
    <nav className="navbar">

        <a href="#" className="logo">
            <span className="logo-icon">✦</span>
            FASHION<span>ISTA</span>
        </a>

        <ul className="nav-links">
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">Clothes</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Favorites</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <div className="nav-actions">
            <a href="#" className="search">⌕</a>
            <a href="#" className="cart">♡</a>
            <a href="#" className="login-btn">Login</a>
        </div>

    </nav>
  )
}

export default Navbaar