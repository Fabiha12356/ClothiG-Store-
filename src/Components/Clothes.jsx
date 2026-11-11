import React from 'react'
import { useState,useEffect } from 'react'

const Clothes = (props) => {

let [clothes,setClothes] = useState([])

// useEffect(()=>{
   
//   async function getClothes(params) {
//     let response = await fetch('https://dummyjson.com/products/category/womens-dresses');
//     let get =  await response.json()
//     console.log(get);
//     console.log(get.products);
//     setClothes(get.products)
//     console.log(clothes);
//   }
//   getClothes()
// })

  return (
(props.condition) ? <>
<h1>hyy</h1>
</> : <>
<h1>heeloo</h1>
</>
  )
}

export default Clothes