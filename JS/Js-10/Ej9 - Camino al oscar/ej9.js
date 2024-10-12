let actoresPrincipales = [];
let actoresVocales = [];
let peliculas = [];
let peliculaPorActorMultiple = {};

let actoresPrincipalesPorPelicula = {
  "Titanic": "Leonardo DiCaprio",
  "El Padrino": "Al Pacino",
  "Matrix": "Keanu Reeves",
  "Iron Man": "Robert Downey Jr",
  "Soy leyenda": "Will Smith",
  "Bastardos sin gloria": "Brad Pitt",
  "John Wick": "Keanu Reeves"
};

for (let pelicula in actoresPrincipalesPorPelicula) {
  let actor = actoresPrincipalesPorPelicula[pelicula];
  actoresPrincipales.push(actor);
  peliculas.push(pelicula);

  if (!peliculaPorActorMultiple[actor]) {
    peliculaPorActorMultiple[actor] = [];
  }
  peliculaPorActorMultiple[actor].push(pelicula);
}

for (let actor of actoresPrincipales) {
  let nombreCompleto = actor.split(" ");
  let nombre = nombreCompleto[0];
  let apellido = nombreCompleto[nombreCompleto.length - 1];

  if (nombre[0].match(/[AEIOU]/i) || apellido[0].match(/[AEIOU]/i)) {
    actoresVocales.push(actor);
  }
}

console.log("Actores Principales:", actoresPrincipales);
console.log("Actores Vocales (con vocal):", actoresVocales);
console.log("Películas:", peliculas);
console.log("Pelicula por Actor (con múltiples películas):", peliculaPorActorMultiple);
