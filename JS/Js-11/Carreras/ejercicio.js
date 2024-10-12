const carroRojo = document.getElementById('carroRojo');
const carroAzul = document.getElementById('carroAzul');

let acumuladorRojo = 0;
let acumuladorAzul = 0;

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'r':
            acumuladorRojo += 10;
            carroRojo.style.marginLeft = acumuladorRojo + 'px';
            verificarGanador(acumuladorRojo, carroRojo, 'Rojo');
            break;
        case 'a':
            acumuladorAzul += 10;
            carroAzul.style.marginLeft = acumuladorAzul + 'px';
            verificarGanador(acumuladorAzul, carroAzul, 'Azul');
            break;
    }
});

function verificarGanador(acumulador, carro, color) {
    const pistaAncho = document.getElementById('pista').clientWidth;
    if (acumulador >= pistaAncho - carro.clientWidth) {
        alert(`¡El carro ${color} ganó la carrera!`);
        acumuladorRojo = 0;
        acumuladorAzul = 0;
        carroRojo.style.marginLeft = '0px';
        carroAzul.style.marginLeft = '0px';
    }
}
