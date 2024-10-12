
const magiaDiv = document.getElementById('magia');
const hiddenImage = document.getElementById('hiddenImage');

magiaDiv.addEventListener('mouseover', () => {
    hiddenImage.style.display = 'none';
});

magiaDiv.addEventListener('mouseout', () => {
    hiddenImage.style.display = 'block';
});
