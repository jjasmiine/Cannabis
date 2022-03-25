import React from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import ProductCards from '../components/ProductCards'


const Products = () => {
    return (
        <div>
            <NavBar />
            <HeroImage heading='Products' text='Choose your strain' />
            <ProductCards />
            <Footer />
        </div>
    )
}

export default Products