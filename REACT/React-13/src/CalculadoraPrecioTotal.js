import React, { useState } from 'react';

const CalculadoraPrecioTotal = () => {
  const [productos, setProductos] = useState([{ nombre: '', precio: 0 }]);
  const [precioTotal, setPrecioTotal] = useState(0);

  const manejarCambio = (indice, tipo, valor) => {
    const nuevosProductos = [...productos];
    if (tipo === 'nombre') {
      nuevosProductos[indice].nombre = valor;
    } else {
      nuevosProductos[indice].precio = parseFloat(valor) || 0;
    }
    setProductos(nuevosProductos);
  };

  const calcularTotal = () => {
    const total = productos.reduce((acc, producto) => acc + producto.precio, 0);
    setPrecioTotal(total);
  };

  return (
    <div>
      {productos.map((producto, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Nombre"
            value={producto.nombre}
            onChange={e => manejarCambio(index, 'nombre', e.target.value)}
          />
          <input
            type="number"
            placeholder="Precio"
            value={producto.precio}
            onChange={e => manejarCambio(index, 'precio', e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => setProductos([...productos, { nombre: '', precio: 0 }])}>Agregar Producto</button>
      <button onClick={calcularTotal}>Calcular Total</button>
      <h2>Precio Total: {precioTotal}</h2>
    </div>
  );
};

export default CalculadoraPrecioTotal;
