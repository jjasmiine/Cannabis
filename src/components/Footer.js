import React from 'react'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>

                <div className='left'>

                    <div className='location'>
                        <FaSearchLocation className='footer-icon' />
                        <div>
                            <p>9999 Chemin Cannabis</p>
                            <h4>Montreal, Canada</h4>
                        </div>
                    </div>

                    <div className='phone'>
                        <h4><FaPhone className='footer-icon' />999.999.9999</h4>
                    </div>

                    <div className='email'>
                        <h4><FaMailBulk className='footer-icon' />Cannabis@gmail.com</h4>
                    </div>

                </div>

                <div className='right'>

                    <h4>Cannabis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className='social'>
                        <FaFacebook className='footer-icon' />
                        <FaTwitter className='footer-icon' />
                        <FaLinkedin className='footer-icon' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer