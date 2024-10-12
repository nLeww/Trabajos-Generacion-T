let estudiantes = [
    { Estudiante: "Juan",   nota: 6 },
    { Estudiante: "Mario",  nota: 8 },
    { Estudiante: "Julia",  nota: 10 },
    { Estudiante: "Sofia",  nota: 2 }
];

for (let estudiante of estudiantes) {
    if (estudiante.nota > 5) {
        estudiante.nota = Math.min(estudiante.nota + 2, 10); // Aumentar nota
    }
}

console.log(estudiantes);
