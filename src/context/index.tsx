import React, { createContext, useState, useContext, useEffect } from 'react';
import { ProductType } from '../types/index';

interface CartProductType extends ProductType {
  quantity: number;
}

interface CartContextType {
  cart: CartProductType[];
  addToCart: (product: ProductType, quantity: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize cart from local storage
  const [cart, setCart] = useState<CartProductType[]>(() => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : [];
  });

  // Update local storage when cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductType, quantity: number) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity } as CartProductType]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
