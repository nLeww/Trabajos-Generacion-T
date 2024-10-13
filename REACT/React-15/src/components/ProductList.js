import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Producto 1', price: '$10' },
    { id: 2, name: 'Producto 2', price: '$20' },
    { id: 3, name: 'Producto 3', price: '$30' },
  ];

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
