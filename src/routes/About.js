import React from 'react'
import AboutCannabis from '../components/AboutCannabis'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='About' text='Cannabis' />
            <AboutCannabis />
            <Footer />
        </div>
    )
}

export default About