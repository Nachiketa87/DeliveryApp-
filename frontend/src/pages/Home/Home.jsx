import React, { use, useState } from 'react'
import './Home.css'
import Header from '../../components/navbar/Header/Header'
import ExploreMenu from '../../components/navbar/ExploreMenu/ExploreMenu'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home