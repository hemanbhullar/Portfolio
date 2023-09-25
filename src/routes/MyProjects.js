import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import PricingCard from '../Components/PricingCards'
import Work from '../Components/Work'

const MyProjects = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading="PROJECTS." text="some of my most recent works"/>
    <Work />
    <PricingCard />
    <Footer />
    </div>
  )
}

export default MyProjects