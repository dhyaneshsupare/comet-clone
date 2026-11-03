import React from 'react'
import Hero from '../../components/hero/Hero'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedProducts />
        <Hero />
        <Categories />
    </>
  )
}

export default Home