
let diasDeViaje = (prompt("¿Cuántos días estarás de viaje?"));

let presupuestoMaximo = (prompt("¿Cuál es tu presupuesto máximo para el viaje?"));

let comida;


let comidasTotales = (prompt("¿Cuántas comidas estimas tener en total durante el viaje?"));


let gastoPorComida = presupuestoMaximo / comidasTotales;

alert("Podés gastar " + gastoPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
