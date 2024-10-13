import React, { useState, useEffect } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(c => c + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Contador Automático: {contador}</h1>
    </div>
  );
};

export default Contador;
