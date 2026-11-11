import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'


import React from 'react'
import Navbaar from './Components/Navbaar'
import Home from './Components/Home'

export const App = () => {
  return (
  <BrowserRouter>
   <Navbaar/>
   <Home/>
  </BrowserRouter>
  )
}


export default App
