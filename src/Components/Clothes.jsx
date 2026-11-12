import React from 'react'
import { useState,useEffect } from 'react'

const Clothes = ({condition , API}) => {

let [clothes,setClothes] = useState([])

useEffect(()=>{
   
  async function getClothes(params) {
    let response = await fetch(`${API}`);
    let get =  await response.json()
    console.log(get);
    console.log(get.products);
    setClothes(get.products)
    console.log(clothes);
  }
  getClothes()
})

  return (
(condition) ? <>
{
  clothes.map((item)=>{
   return <h1>{item.title}</h1>
  })
}
</> : <>
{
  clothes.map((item)=>{
   return <h1>{item.title}</h1>
  })
}
</>
  )
}

export default Clothes