import React, { useState } from 'react'
import Banner from '../components/Banner'
import Container from '../components/Container'
import Informed from '../components/Informed'
import About from '../components/About'
import ExploreMenu from '../components/ExploreMenu'
import WayOrder from '../components/WayOrder'
const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Banner/>
      <Container/>
      <Informed/>
      <About/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <WayOrder/>
    </div>
  )
}

export default Home
