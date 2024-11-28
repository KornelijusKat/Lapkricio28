import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Movie from './movie/Movie'
import Home from './home/Home'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>   
      <Route path='/movies/:id' element={<Movie/>}/>  
    </Routes>
  )
}

export default App
