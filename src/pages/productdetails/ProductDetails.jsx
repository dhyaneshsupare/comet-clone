import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    //console.log(location)
    const product = location.state?.product

  return (
    <div>
      {product ? (
        <div className="product-container">
          <div className="img-container">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details">
            <h1>{product.title}</h1>
            <br />
            <h3>{product.price}</h3>
            <br />
            <hr />
            <br />
            <p>{product.description}</p>
            <p>{product.category}</p>
            <div className="btn">
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Data nahi aa raha</h1>
      )}
    </div>
  );
}

export default ProductDetails