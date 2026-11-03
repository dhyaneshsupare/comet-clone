import React, { useEffect, useState } from 'react'
import sn1 from "../../assets/10032.jpg";
import sn2 from "../../assets/10033.jpg";
import sn3 from "../../assets/10035.jpg";
import sn4 from "../../assets/10037.jpg";
import sn5 from "../../assets/10045.jpg";
import sn6 from "../../assets/10046.jpg";
import '../men/Men.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const AllSneakers = () => {
  const [newProducts, setNewProducts] = useState([])

  useEffect(() => {
    getAllProducts()
  }, [])

  const navigate = useNavigate()

    // const allProducts = [
    //   {
    //     id: 1,
    //     productImage: sn1,
    //     price: 4999,
    //   },
    //   {
    //     id: 2,
    //     productImage: sn2,
    //     price: 4999,
    //   },
    //   {
    //     id: 3,
    //     productImage: sn3,
    //     price: 4999,
    //   },
    //   {
    //     id: 4,
    //     productImage: sn4,
    //     price: 4999,
    //   },
    //   {
    //     id: 5,
    //     productImage: sn5,
    //     price: 4999,
    //   },
    //   {
    //     id: 6,
    //     productImage: sn6,
    //     price: 4999,
    //   },
    //   {
    //     id: 7,
    //     productImage: sn1,
    //     price: 4999,
    //   },
    //   {
    //     id: 8,
    //     productImage: sn2,
    //     price: 4999,
    //   },
    //   {
    //     id: 9,
    //     productImage: sn3,
    //     price: 4999,
    //   },
    //   {
    //     id: 10,
    //     productImage: sn4,
    //     price: 4999,
    //   },
    //   {
    //     id: 11,
    //     productImage: sn5,
    //     price: 4999,
    //   },
    //   {
    //     id: 12,
    //     productImage: sn6,
    //     price: 4999,
    //   },
    // ];

  const getAllProducts = async () => {
    try {
      const productData = await axios.get("https://fakestoreapi.com/products");
      setNewProducts(productData.data) //loading data from API into setter function.
    } catch (error) {
      console.log("Error in fetching Data", error)
    }
  }

    const handleCardClick = (product) => {
      navigate(`/productdetails/${product.id}`, { state : { product }})
    }
  return (
    // <div className="container">
    //   {allProducts.map((product) => (
    //     <div
    //       key={product.id}
    //       className="product-card"
    //       onClick={() => {
    //         handleCardClick(product)
    //       }}
    //     >
    //       <div className="product-img-container">
    //         <img src={product.productImage} alt="" />
    //       </div>
    //       <div className="product-details">
    //         <p>₹ {product.price}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div className="container">
      {newProducts.map((prod) => (
        <div
          key={prod.id}
          className="product-card"
          onClick={() => {
            handleCardClick(prod);
          }}
        >
          <div className="product-img-container">
            <img src={prod.image} alt={prod.title} />
          </div>

          <div className="product-details">
            <h1>{prod.title}</h1>
            <h4>{prod.price}</h4>
            <p>{prod.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllSneakers