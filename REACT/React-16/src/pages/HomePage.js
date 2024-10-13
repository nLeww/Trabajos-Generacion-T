
import React from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div>
      <h1>Mi E-commerce</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default HomePage;
