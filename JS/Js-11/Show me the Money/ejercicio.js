const buttons = {
    money: document.getElementById('moneyButton'),
    miami: document.getElementById('miamiButton'),
    maiameee: document.getElementById('maiameeeButton'),
};

const images = {
    money: document.getElementById('moneyImage'),
    miami: document.getElementById('miamiImage'),
    maiameee: document.getElementById('maiameeeImage'),
};

Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', () => {
        images[key].classList.toggle('oculto');
    });

    images[key].addEventListener('click', () => {
        images[key].classList.add('oculto');
    });
});
