const img = document.querySelector('.mouse-image');
let mouseDown = false;

document.body.addEventListener('mousedown', () => {
    mouseDown = true;
});

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
});

document.body.addEventListener('mousemove', (event) => {
    if (mouseDown) {
        const imgWidth = img.clientWidth;
        const imgHeight = img.clientHeight;

        img.style.top = (event.clientY - imgHeight / 2) + 'px'; 
        img.style.left = (event.clientX - imgWidth / 2) + 'px'; 
    }
});
