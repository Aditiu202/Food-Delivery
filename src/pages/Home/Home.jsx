import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExporeMenu from '../../components/ExploreMenu/ExporeMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  const [category, setCategory] = useState('All');
  return (
  <div>
    <Header/>
    <ExporeMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
  
  </div>
  )
}

export default Home