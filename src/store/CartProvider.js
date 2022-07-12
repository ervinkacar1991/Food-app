import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartProvider;
