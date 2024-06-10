import React, { useState } from 'react'
import Banner from '../components/Banner'
import Container from '../components/Container'
import Informed from '../components/Informed'
import About from '../components/About'
const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div>
      <Banner/>
      <Container/>
      <Informed/>
      <About/>
    </div>
  )
}

export default Home
