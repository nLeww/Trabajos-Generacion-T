
let personas = [
  { nombre: "Alba",     edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen",    edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine",edad: 55 }
];

personas.sort((a, b) => a.edad - b.edad);

for (let i = 0; i < personas.length; i++) {
  personas[i].posicion = i;
}

console.log(personas);

/*
0: Object { nombre: "Santiago", edad: 4, posicion: 0 }
1: Object { nombre: "Alba", edad: 15, posicion: 1 }
2: Object { nombre: "Belen", edad: 20, posicion: 2 }
3: Object { nombre: "Estrella", edad: 30, posicion: 3 }
4: Object { nombre: "Katherine", edad: 55, posicion: 4 }
*/
