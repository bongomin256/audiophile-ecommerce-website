import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  //   getItemQty,
  //   increaseCartQty,
  //   decreaseCartQty,
  //   removeFromCart,
});

const UseCartContext = () => {
  return useContext(CartContext);
};

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

  return (
    <CartContext.Provider value={{ getItemQty, increaseCartQty }}>
      {children}
    </CartContext.Provider>
  );
};
export { UseCartContext, CartContextProvider };
