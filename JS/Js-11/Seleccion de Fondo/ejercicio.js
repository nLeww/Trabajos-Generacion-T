const colorInput = document.getElementById('colorInput');
const colores = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow',
    blanco: 'white',
    verde: 'green',
};

colorInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const color = colorInput.value.toLowerCase();
        document.body.style.backgroundColor = colores[color] || 'white';
    }
});

colorInput.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        document.body.style.backgroundColor = 'white';
    }
});
