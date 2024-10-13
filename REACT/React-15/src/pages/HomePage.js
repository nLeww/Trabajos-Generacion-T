import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import ProductList from '../components/ProductList';
import './HomePage.css';

const HomePage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <header className="header">
        <h1>Mi E-commerce</h1>
        <button onClick={toggleTheme}>
          Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </button>
      </header>
      <div className="product-list">
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
