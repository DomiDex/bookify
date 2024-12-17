'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import BookAdded from '../../ui/cart/BookAdded';

type CartItem = {
  id: string;
  title: string;
  cover: string;
  author: string;
  price: number;
  type: 'buy' | 'rent';
  quantity: number;
};

type NotificationItem = {
  title: string;
  cover: string;
  type: 'buy' | 'rent';
};

type CartContextType = {
  items: CartItem[];
  addToCart: (book: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: number;
  notification: NotificationItem | null;
  clearNotification: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<NotificationItem | null>(
    null
  );

  const addToCart = (book: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === book.id && item.type === book.type
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === book.id && item.type === book.type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...book, quantity: 1 }];
    });

    setNotification({
      title: book.title,
      cover: book.cover,
      type: book.type,
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        notification,
        clearNotification,
      }}
    >
      {children}
      {notification && (
        <BookAdded {...notification} show={true} onClose={clearNotification} />
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
