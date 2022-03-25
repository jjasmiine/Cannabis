import React from 'react'
import { Link } from 'react-router-dom'
import cannabis4 from '../assets/cannabis4.jpg'
import cannabis7 from '../assets/cannabis7.jpg'

import './AboutCannabis.css'

const AboutCannabis = () => {
    return (
        <div className='about'>

            <div className='left'>
                <h1>Growing Process</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link to='/products'><button className='btn'>Explore</button></Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={cannabis4} className='img' alts='cannabis' />
                    </div>

                    <div className='image-stack bottom'>
                        <img src={cannabis7} className='img' alts='cannabis' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutCannabis