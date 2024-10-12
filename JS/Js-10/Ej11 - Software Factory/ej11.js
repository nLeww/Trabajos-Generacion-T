
let ecommerce = [
  { nombre: "Samsung TV",         precio: 6000, cantidad: 10 },
  { nombre: "DELL notebook",      precio: 4000, cantidad: 30 },
  { nombre: "Auriculares Sony",   precio: 1500, cantidad: 15 },
  { nombre: "Monitor Philips",    precio: 12000,cantidad: 20 },
  { nombre: "Teclado Logitech",   precio: 3000, cantidad: 5 },
];

function calcularValorTotal(ecommerce) {
  let totalPorArticulo = {};
  for (let producto of ecommerce) {
      let { nombre, precio, cantidad } = producto;
      let valorTotal = precio * cantidad;

      totalPorArticulo[nombre] = valorTotal;
  
    }
  let resultado = [];
  for (let nombre in totalPorArticulo) {
      resultado.push({
          nombre: nombre,
          valorTotal: totalPorArticulo[nombre]
      });
  }
  return resultado;
}

let resumenTotal = calcularValorTotal(ecommerce);
console.log(resumenTotal);
