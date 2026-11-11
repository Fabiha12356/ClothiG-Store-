import React from 'react'

import "./Hero.css"
 import { Link ,Route,Routes} from 'react-router-dom'
 import Clothes from './Clothes'
 import Fav from './Fav'

const Hero = () => {
  return (
    
<><section className="hero">

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
                 
                 <Link to="/dresses" className='category-btn'>Dresses</Link>
                 <Link to="/shirts" className='category-btn'>Shirts</Link>
                 <Link to="/bags" className='category-btn'>Bags</Link>
                 <Link to="/shoes" className='category-btn'>Shoes</Link>
        

            
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


</>

  )
}

export default Hero