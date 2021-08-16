let arraySrc = [
    'img_slider/1.jpg',
    'img_slider//2.jpg',
    'img_slider//3.jpg',
    'img_slider//4.jpg'
];
const img = document.getElementById('img');
let i = 0;
const showImg = () => {
    img.src = arraySrc[i];
    i = (i < arraySrc.length - 1) ? i + 1 : 0;
}
const interval = () => {
    setInterval(showImg, 2500);
}
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach(cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX{${operacion}}`
    })
}