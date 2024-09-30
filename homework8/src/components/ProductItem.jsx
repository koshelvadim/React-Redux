import React, { useContext } from 'react';
// импорт библиотеки для работы с свг
import { HandySvg } from "handy-svg";
// импорт картинки
import add_to_cart_btn from "../img/add_to_cart_btn.svg";
// Импорт контекста корзины
import { BasketContext } from "../contexts/BasketContext"; 


function ProductItem({ id, title, description, price, imageUrl, size }) {
  // Получение функции добавления товара в корзину из BasketContext
  const { addToBasket } = useContext(BasketContext);

  // Вызов функции добавления в корзину
  const handleAddToBasket = () => {
    addToBasket(id);
  };

  return (
    <div className="item">
      <div className="item_img">
        <div className="hover_img"></div>
        <div className="hover_button">
          <div className="add_to_cart_btn" onClick={handleAddToBasket}>
            <HandySvg src={add_to_cart_btn} width="27" height="25" />
            Add to Cart
          </div>
        </div>
        <img className="item_pic" src={imageUrl} alt="productImg" />
      </div>
      <div className="item_text">
        <h5 className="item_title">{title}</h5>
        <p className="item_description">{description}</p>
        <p className="item_size">Size: {size}</p>
        <p className="item_price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductItem;