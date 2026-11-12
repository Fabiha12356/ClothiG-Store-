import React from 'react'
import { useState,useEffect } from 'react'
import "./Clothes.css"
const Clothes = ({condition , API}) => {

let [clothes,setClothes] = useState([])

useEffect(()=>{
   
  async function getClothes(params) {
    let response = await fetch(`${API}`);
    let get =  await response.json()
    setClothes(get.products)
    console.log(get.products[0].images)
  }
  getClothes()
},[])

const likebtn = (e)=>{
  e.target.className =
  e.target.className === " fa-solid fa-heart dark"
    ? " fa-solid fa-heart light"
    : " fa-solid fa-heart dark";
  
}


  return (
(condition) ? <>

  <section className="products-section">

      <div className="products-heading">
        <span className="products-tag">✦ FASHION COLLECTION</span>

        <h2>
          Discover Our <span>Products</span>
        </h2>

        <p>
          Explore our latest collection and find your perfect style.
        </p>
      </div>

      <div className="products-grid">
{
        clothes.map((item) => {
          return (

            <div className="product-card" key={item.id}>

              <div className="product-image">

                <img
                  src={item.images[0]}
                  alt={item.title}
                />

                <button className='fav-btn' onClick={likebtn}>
                 <i className="fa-solid fa-heart light"></i>
                </button>

                <span className="product-category">
                  {item.category}
                </span>

              </div>

              <div className="product-info">

                <span className="product-id">
                  PRODUCT ID: #{item.id}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="product-bottom">

                  <h4>Rs. {item.price.toLocaleString()}</h4>

                  <button className="view-btn">
                    View Product →
                  </button>

                </div>

              </div>

            </div>

          )
        })}

      </div>

      {clothes.length === 0 && (
        <div className="empty-products">
          <h3>No Products Found!</h3>
          <p>There are no products in this category yet.</p>
        </div>
      )}

    </section>

</> : <>
<section className="products-section">

      <div className="products-heading">
        <span className="products-tag">✦ FASHION COLLECTION</span>

        <h2>
          Discover Our <span>Products</span>
        </h2>

        <p>
          Explore our latest collection and find your perfect style.
        </p>
      </div>

      <div className="products-grid">
{
        clothes.map((item) => {

          const isFavorite = clothes.some(
            (fav) => fav.id === item.id
          )

          return (

            <div className="product-card" key={item.id}>

              <div className="product-image">

                <img
                  src={item.images[0]}
                  alt={item.title}
                />

                <button
                  className={`fav-btn ${isFavorite ? "liked" : ""}`}
                  onClick={() => toggleFavorite(item)}
                  aria-label="Toggle favorite"
                >
                  {isFavorite ? "♥" : "♡"}
                </button>

                <span className="product-category">
                  {item.category}
                </span>

              </div>

              <div className="product-info">

                <span className="product-id">
                  PRODUCT ID: #{item.id}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="product-bottom">

                  <h4>Rs. {item.price.toLocaleString()}</h4>

                  <button className="view-btn">
                    View Product →
                  </button>

                </div>

              </div>

            </div>

          )
        })}

      </div>

      {clothes.length === 0 && (
        <div className="empty-products">
          <h3>No Products Found!</h3>
          <p>There are no products in this category yet.</p>
        </div>
      )}

    </section>
</>
  )
}

export default Clothes