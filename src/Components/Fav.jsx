import React from 'react'
import "./Fav.css"
const Fav = ({Favourite ,setFavourite}) => {

  let removeBTn = (favs)=>{
    console.log("okkk")
    setFavourite(Favourite.filter((product)=> product.id !== favs.id))
  }
  return (
   
    <div className="fav-container">

      <div className="fav-heading">
        <h2>My Favorites ❤️</h2>
        <p>Your favourite movies in one place</p>
      </div>

      <div className="fav-list"></div>
{
Favourite.length == 0 ? (
  <h1>Not fav yet</h1>
) : (
  Favourite.map((Favourite)=>{

return(
  <div className="fav-item" key={Favourite.id}>

               <img
                  src={Favourite.images[0]}
                  alt={Favourite.title}
                />

              <h5>{Favourite.title}</h5>
              <button className="remove-fav-btn" onClick={()=> removeBTn(Favourite)}>
                      ✕
                      </button>

            </div>
)

  })
)

}

    </div>  

   
  )
}

export default Fav