import React, {useState, useContext} from 'react';
import addCard from '../icons/bt_add_to_cart.svg';

//Importamos context
import AppContext from '../context/AppContext';




const Product = ({product}) => {

  const {addToCard} = useContext(AppContext);

  const handleClick = item => {
		addToCart(item);
	}
  
  return (
    <div>
        <div className="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt />
            <div className="product-info">
                <div>
                  <p>${product.price}</p>
                  <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addCard} />
                </figure>
            </div>
        </div>    
    </div>
  )
}

export default Product; 