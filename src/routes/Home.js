import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'

import Footer from '../components/Footer'
import Worked from '../components/Worked'


const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <Heroimg/>
      <Worked/>
      <Footer/>
    </div>
  )
}

export default Home
