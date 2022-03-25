import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaWindowRestore } from 'react-icons/fa'
import { GiMapleLeaf } from 'react-icons/gi'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        }
        else if (window.scrollY <= 100) {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/' className='logo'>
                <GiMapleLeaf />
            </Link>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li>
                    <Link to='/'>Home</Link>
                </li>

                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/products'>Products</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>

            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes />) : (<FaBars />)}
            </div>
        </div>
    )
}

export default Navbar