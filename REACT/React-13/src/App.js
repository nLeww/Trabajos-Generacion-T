import React from 'react';
import CalculadoraCuadrados from './CalculadoraCuadrados';
import CalculadoraPrecioTotal from './CalculadoraPrecioTotal';
import Contador from './Contador'; // Asegúrate de importar el contador

const App = () => {
  return (
    <div>
      <h1>Ejercicios de React</h1>
      <Contador /> {/* Incluye el contador aquí */}
      <CalculadoraCuadrados />
      <CalculadoraPrecioTotal />
    </div>
  );
};

export default App;
