// ПЕРЕДЕЛАЛ ВСЕ НА REDUX !!!

// import React, { createContext, useState, useEffect } from "react";

// // Создание контекста корзины
// export const BasketContext = createContext();

// // Создание компонента корзины
// const BasketItems = (props) => {
//   // корзина загружается из localStorage, если пуст, то []
//   const [basketItems, setBasketItems] = useState(
//     JSON.parse(localStorage.getItem("basket")) || []
//   );

//   // Функция добавления товара в корзину по его id
//   const addToBasket = (productId) => {
//     setBasketItems((prevCartItems) => {
//       // Проверка наличия товар с таким id в корзине
//       const existingItem = prevCartItems.find((item) => item.id === productId);
//       if (existingItem) {
//         // Если товар уже есть в корзине, его количество увеличивается + 1
//         return prevCartItems.map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // Если товара не было в корзине, такой добавляется в корзину в количестве 1.
//         return [...prevCartItems, { id: productId, quantity: 1 }];
//       }
//     });
//   };

//   // Функция удаления товара из корзины по его id
//   const removeFromBasket = (productId) => {
//     setBasketItems((prevCartItems) =>
//       // возращает массив кроме элемента с id
//       prevCartItems.filter((item) => item.id !== productId)
//     );
//   };

//   // Функция изменения количества товаров в корзине
//   const updateBasketItemQuantity = (productId, quantityChange) => {
//     setBasketItems(
//       basketItems.map((item) =>
//         item.id === productId
//           ? {
//               ...item,
//               quantity: Math.max(1, quantityChange), // Минимум 1 единица товара в корзине
//             }
//           : item
//       )
//     );
//   };

//   // Очистка корзины
//   const clearBasket = () => {
//     setBasketItems([]);
//   };

//   // Имитация бэкенда: сохранение состояния корзины в localStorage при каждом изменении
//   useEffect(() => {
//     localStorage.setItem("basket", JSON.stringify(basketItems));
//   }, [basketItems]);

//   return (
//     <BasketContext.Provider
//       value={{
//         basketItems,
//         addToBasket,
//         removeFromBasket,
//         clearBasket,
//         updateBasketItemQuantity,
//       }}
//     >
//       {props.children}
//     </BasketContext.Provider>
//   );
// };

// export default BasketItems;