import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'


import React from 'react'
import Navbaar from './Components/Navbaar'

export const App = () => {
  return (
  <BrowserRouter>
   <Navbaar/>
  </BrowserRouter>
  )
}


export default App
