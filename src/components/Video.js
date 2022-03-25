import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'

import cannabis from '../assets/cannabis.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={cannabis} type='video/mp4' />
            </video>

            <div className='content'>
                <h1>Cannabis</h1>
                <p>we ship worldwide</p>

                <div>
                    <Link to='/products' className='btn'>Products</Link>
                    <Link to='/contact' className='btn-light'>Dab Up</Link>
                </div>
            </div>

        </div>
    )
}

export default Video