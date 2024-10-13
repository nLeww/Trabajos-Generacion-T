import React, { useState } from 'react';

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [cuadrado, setCuadrado] = useState(0);

  const calcularCuadrado = () => {
    setCuadrado(numero * numero);
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={e => setNumero(e.target.value)}
      />
      <button onClick={calcularCuadrado}>Calcular Cuadrado</button>
      <h2>Cuadrado: {cuadrado}</h2>
    </div>
  );
};

export default CalculadoraCuadrados;
