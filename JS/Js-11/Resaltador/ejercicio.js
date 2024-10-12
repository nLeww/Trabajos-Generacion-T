
const paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
    paragraph.addEventListener('click', function() {
        paragraph.classList.toggle('resaltado');
    });
}
