import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './ProductDetails.css'

const MenProductDetails = () => {
    const { id } = useParams()
    const location = useLocation()
    const product = location.state?.product

  return (
    <div>
      {product ? (
        <div className="product-container">
          <div className="img-container">
            <img src={product.productImage} alt="" />
          </div>

          <div className="product-details">
            <span>
              ₹<del>4999</del> ₹4599{" "}
            </span>
            <br />
            <hr />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              obcaecati illo architecto aliquam aperiam dolor, sunt voluptate
              alias deleniti nihil numquam soluta error ratione iure deserunt
              nesciunt fugit dolore facilis!
            </p>
          </div>
        </div>
      ) : (
        <h1>Data nahi aa raha</h1>
      )}
    </div>
  );
}

export default MenProductDetails