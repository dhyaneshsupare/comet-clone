import React from 'react'
import sn1 from '../../assets/10032.jpg'
import sn2 from '../../assets/10033.jpg'
import sn3 from '../../assets/10035.jpg'
import sn4 from '../../assets/10037.jpg'
import sn5 from '../../assets/10045.jpg'
import sn6 from '../../assets/10046.jpg'
import sn7 from '../../assets/10058.jpg'
import sn8 from '../../assets/10059.jpg'
import sn9 from '../../assets/10060.jpg'
import sn10 from '../../assets/10071.jpg'
import sn11 from '../../assets/10072.jpg'
import sn12 from '../../assets/10073.jpg'
import './Men.css'
import { useNavigate } from 'react-router-dom'

const Men = () => {
  const navigate = useNavigate()

  const handleCardClick = (product) => {
    navigate(`/men/${product.id}`, { state: { product } });
  }

  const allProducts = [
    {
      id: 1,
      productImage: sn1,
      price: 4999
    },
    {
      id: 2,
      productImage: sn2,
      price: 4999
    },
    {
      id: 3,
      productImage: sn3,
      price: 4999
    },
    {
      id: 4,
      productImage: sn4,
      price: 4999
    },
    {
      id: 5,
      productImage: sn5,
      price: 4999
    },
    {
      id: 6,
      productImage: sn6,
      price: 4999
    },
    {
      id: 7,
      productImage: sn7,
      price: 4999
    },
    {
      id: 8,
      productImage: sn8,
      price: 4999
    },
    {
      id: 9,
      productImage: sn9,
      price: 4999
    },
    {
      id: 10,
      productImage: sn10,
      price: 4999
    },
    {
      id: 11,
      productImage: sn11,
      price: 4999
    },
    {
      id: 12,
      productImage: sn12,
      price: 4999
    },
  ]

  return (
    <div className="container">
      {allProducts.map((product) => (
        <div key={product.id} className="product-card" onClick={() => {handleCardClick(product)}}>
          <div className="product-img-container">
            <img src={product.productImage} alt="" />
          </div>
          <div className="product-details">
            <p>₹{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Men