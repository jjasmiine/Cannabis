import React from 'react'
import { Link } from 'react-router-dom'
import cannabis2 from '../assets/cannabis2.jpg'
import cannabis3 from '../assets/cannabis3.jpg'
import cannabis6 from '../assets/cannabis6.jpg'

import '../components/ProductCards.css'

const ProductCards = () => {
    return (
        <div className='products'>
            <div className='card-container'>

                <div className='card'>
                    <h3>Flower</h3>
                    <span className='bar'></span>
                    <img src={cannabis2} alt='cannabis' className='img-card' />
                    <p> Indica </p>
                    <p> Sativa </p>
                    <p> Hybrid </p>
                    <Link to='/products' className='btn'>Explore</Link>
                </div>

                <div className='card'>
                    <h3>Edible</h3>
                    <span className='bar'></span>
                    <img src={cannabis6} alt='cannabis' className='img-card' />
                    <p> Indica </p>
                    <p> Sativa </p>
                    <p> Hybrid </p>
                    <Link to='/products' className='btn'>Explore</Link>
                </div>

                <div className='card'>
                    <h3>Topical</h3>
                    <span className='bar'></span>
                    <img src={cannabis3} alt='cannabis' className='img-card' />
                    <p> Indica </p>
                    <p> Sativa </p>
                    <p> Hybrid </p>
                    <Link to='/products' className='btn'>Explore</Link>
                </div>

            </div>
        </div>
    )
}

export default ProductCards