import React, { useState, createContext } from "react";

export const ContextCart = createContext({ cart: [], total: 0, totalQuantity: 0, removeItem: () => {}, addItem: () => {}, clearCart: () => {} });

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2); // Redondear el total a 2 decimales
  };

  const calculateTotalQuantity = () => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    return totalQuantity;
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter(product => product.id !== itemId);
    setCart(cartUpdated);
  };

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart(prev => [...prev, { ...item, quantity }]);
    } else {
      console.error("Product was already added");
    }
  };

  const isInCart = (itemId) => {
    return cart.some((product) => product.id === itemId);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = calculateTotal();
  const totalQuantity = calculateTotalQuantity();

  return (
    <ContextCart.Provider value={{ cart, total, totalQuantity, removeItem, addItem, clearCart }}>
      {children}
    </ContextCart.Provider>
  );
};
