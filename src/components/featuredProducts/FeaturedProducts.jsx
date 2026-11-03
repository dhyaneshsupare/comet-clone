import React from 'react'
import featuredProduct1 from '../../assets/featuredProduct1.jpg'
import featuredProduct2 from '../../assets/featuredProduct2.jpg'
import featuredProduct3 from '../../assets/featuredProduct3.jpg'
import featuredProduct4 from '../../assets/featuredProduct4.jpg'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  return (
    <div className='featured-card-container'>
        <div className='product-card'>
            <img src={featuredProduct1} alt="" />
        </div>
        <div className='product-card'>
            <img src={featuredProduct2} alt="" />
        </div>
        <div className='product-card'>
            <img src={featuredProduct3} alt="" />
        </div>
        <div className='product-card'>
            <img src={featuredProduct4} alt="" />
        </div>
    </div>
  )
}

export default FeaturedProducts