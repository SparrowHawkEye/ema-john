import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Product.css'
const Product = (props) => {
  const {name,price,ratings,img,seller} = props.product;
  // const {handleAddToCart} = props;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
      <p className='product-name'>{name}</p>
      <p>Price: ${price}</p>
      <p><small>Seller: {seller}</small></p>
      <p><small>Ratings: {ratings}</small></p>
      </div>
      <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
        <p>Add to Cart <FontAwesomeIcon style={{marginLeft:'8px'}} icon={faCartShopping}></FontAwesomeIcon> </p>
      </button>
    </div>
  );
};

export default Product;