import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// const UseCartContext = () => {
//   return useContext(CartContext);
// };

const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  const getItemQty = (id) => {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQty = (id) => {
    setCartItem((curItems) => {
      if (curItems.find((item) => item.id === id) === null) {
        return [...curItems, { id, quantity: 1 }];
      }
    });
  };

  const addToCart = (slug, count) => {
    for (let i = 0; i < count; i++) {
      setCartItem((prevState) => [...prevState, slug]);
      console.log(cartItem);
    }
  };
  // const addToCart = (productDetail) => {
  //   console.log(productDetail);
  // };

  return (
    <CartContext.Provider value={{ addToCart, increaseCartQty, getItemQty }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
