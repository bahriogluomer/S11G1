import { createContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export const CartContextProvider = (props) => {
  const [cart, setCart] = useLocalStorage([], 's11g1');

  const addItem = (item) => {
    // verilen itemi sepete ekle
    const newCart = [...cart, item];
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = cart.filter((item, fIndex) => fIndex !== index);
    setCart(newCart);
  };

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, getCartTotal, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
