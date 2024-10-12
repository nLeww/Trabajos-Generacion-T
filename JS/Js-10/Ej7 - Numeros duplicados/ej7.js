
let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};

for (let numero of numeros) {
    numeros_duplicados[numero] = numero * 2; 
}

console.log(numeros_duplicados);
