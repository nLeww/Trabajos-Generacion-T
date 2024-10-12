
let peliculas = [
    {
        titulo: "Inception",
        rating: 7,
        loHasVisto: true
    },
    {
        titulo: "The Matrix",
        rating: 8,
        loHasVisto: false
    },
    {
        titulo: "Interstellar",
        rating: 10,
        loHasVisto: true
    },
    {
        titulo: "The Godfather",
        rating: 9,
        loHasVisto: false
    }
];

for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];
    

    let mensaje = pelicula.loHasVisto 
        ? `Ya has visto "${pelicula.titulo}" - Estrellas: ${pelicula.rating}` 
        : `No has visto "${pelicula.titulo}" - Estrellas: ${pelicula.rating}`;
    

    console.log(mensaje);
}
