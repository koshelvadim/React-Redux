import React from 'react';
// импорт библиотеки для работы с свг
import { HandySvg } from "handy-svg";
// импорт картинки
import add_to_cart_btn from "../img/add_to_cart_btn.svg";
import { addToBasket } from '../redux/basketReducer';
import { useDispatch } from 'react-redux'


function ProductItem(product) {

  const dispatch = useDispatch();

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="item">
      <div className="item_img">
        <div className="hover_img"></div>
        <div className="hover_button">
          <div className="add_to_cart_btn" onClick={(e) => handleAddToBasket(product)}>
            <HandySvg src={add_to_cart_btn} width="27" height="25" />
            Add to Cart
          </div>
        </div>
        <img className="item_pic" src={product.imageUrl} alt="productImg" />
      </div>
      <div className="item_text">
        <h5 className="item_title">{product.title}</h5>
        <p className="item_description">{product.description}</p>
        <p className="item_size">Size: {product.size}</p>
        <p className="item_price">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductItem;