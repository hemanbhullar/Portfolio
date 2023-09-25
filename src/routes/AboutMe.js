import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import AboutContent from '../Components/AboutContent'
import AboutContent1 from '../Components/AboutContent1'

const AboutMe = () => {
  return (
    <div>
    <Navbar />
    <HeroImg2 heading="ABOUT." text="Im a freindly Full Stack Developer. " />
    <AboutContent1 />
    <AboutContent />
    <Footer />
    </div>
  )
}

export default AboutMe