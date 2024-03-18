import React from 'react'
import Nav from './MealDB/Navbar'
import Home from './MealDB/Home'
import Footer from './MealDB/Footer'
import Fetching from './MealDB/Cabbage'
import './App.css'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const App = () => {
  return (
   


<Router>
<Nav/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/fetching' element={<Fetching/>}></Route>

</Routes>
<Footer/>
</Router>

  )
}


export default App
