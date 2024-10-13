
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Producto 1', price: '$10' },
  { id: 2, name: 'Producto 2', price: '$20' },
  { id: 3, name: 'Producto 3', price: '$30' },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
