
import React from 'react';
import { CartProvider } from './contexts/CartContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
};

export default App;
