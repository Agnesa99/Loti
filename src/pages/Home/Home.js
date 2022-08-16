import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner'
import Slider from '../../components/pages/Home/Slider'
import Cards from '../../components/pages/Home/Cards'
import Lavender from '../../components/pages/Home/Lavender'
import Benefits from '../../components/pages/Home/Benefits'
import Box from '../../components/pages/Home/Box'
import Slider2 from '../../components/pages/Home/Slider2'
import Top from '../../components/pages/Home/Top'
import Footer from '../../components/shared/Footer/Footer'

const Home = () => {
  return (
    <div className="home-page">
       <Navbar/>
       <Banner/>
       <Slider/>
       <Cards/>
       <Lavender/>
       <Benefits/>
       <Box/>
       <Slider2/>
       <Top/>
       <Footer/>
    </div>
  )
}

export default Home