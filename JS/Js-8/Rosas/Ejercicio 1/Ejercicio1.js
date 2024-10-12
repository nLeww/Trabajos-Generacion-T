
let edad = (prompt("¿Cuál es tu edad?"));

let edadMaxima = (prompt("¿Cuál es tu edad máxima estimada?"));

let snackFavorito = prompt("¿Cuál es tu snack favorito?");

let snacksPorDia = (prompt("¿Cuántos snacks comes al día?"));

let snacksRestantes = (edadMaxima - edad) * 365 * snacksPorDia;

alert("Necesitarás " + snacksRestantes + " snacks para que te alcancen hasta los " + edadMaxima + " años.");

let precioPorSnack = (prompt("¿Cuál es el precio de tu snack favorito?"));

let gastoTotal = snacksRestantes * precioPorSnack;

alert("Vas a gastar un total de " + gastoTotal + " en snacks el resto de tu vida.");
