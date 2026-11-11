import React from 'react'

import "./Hero.css"

const Hero = () => {
  return (
    
<section className="hero">

    <div className="hero-overlay">

        <div className="hero-content">

            <span className="hero-tag">✦ NEW SEASON COLLECTION</span>

            <h1>
                Discover Your
                <span>Perfect Style</span>
            </h1>

            <p>
                Explore the latest fashion trends and upgrade
                your wardrobe with our exclusive collections.
            </p>

            <div className="category-buttons">
                <a href="#" className="category-btn">Dresses</a>
                <a href="#" className="category-btn">Shirts</a>
                <a href="#" className="category-btn">Bags</a>
                <a href="#" className="category-btn">Shoes</a>
            </div>

            <a href="#" className="shop-btn">
                Explore Collection <span>→</span>
            </a>

        </div>

        <div className="hero-bottom">
            <span>STYLE THAT SPEAKS</span>
            <span>2026 COLLECTION ✦</span>
        </div>

    </div>

</section>

  )
}

export default Hero