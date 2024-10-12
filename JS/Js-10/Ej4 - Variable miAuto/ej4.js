
let miAuto = {};

miAuto.marca = "Toyota"; 
miAuto.año = 2020;
miAuto.nuevo = true;

let propertyKey = "modelo"; 
miAuto[propertyKey] = "Corolla"; 

let anotherPropertyKey = "precio";
miAuto[anotherPropertyKey] = 20000;

let nextProperty = "color";
miAuto[nextProperty] = "Rojo"; 

for (let key in miAuto) {
    console.log(key, miAuto[key]);
}


console.log(miAuto[propertyKey]);  //devuelve toda la info del auto (marca, si es nuev, modelo, precio, color)
console.log(" ");
console.log(miAuto["modelo"]);     //devuelve Corolla
console.log(" ");
console.log(miAuto[nextProperty]); //devuelve Rojo
console.log(" ");
console.log(miAuto["color"]);      //devuelve Rojo tambien

