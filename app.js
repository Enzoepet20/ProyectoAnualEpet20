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
punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i;
        let operacion = posicion * -25;
        grande.style.transform = `translateX(${ operacion }%)`;

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo');
        })
        punto[i].classList.add('activo');

    })
})
let boton_wpp = document.getElementById("boton_wpp");
boton_wpp.innerHTML += `<a href="https://api.whatsapp.com/send?phone=+5492994181952" class="btn-wsp" target="_blank"><img src="icono/WhatsApp-logo.png" class="btn-wsp" alt="">
</a> `
let ctfooter = document.getElementById("ct-footer");
ctfooter.innerHTML += ` <footer class="ct-footer">
<div class="container">
    <ul class="ct-footer-list text-center-sm">
        <li>
            <h2 class="ct-footer-list-header">
                Sobre nosotros
            </h2>
            <ul>
                <li>
                    <a href="">Empresa familiar</a>
                </li>
                <li>
                    <a href="">Clientes</a>
                </li>
            </ul>
        </li>
        <li>
            <h2 class="ct-footer-list-header">
                Servicios
            </h2>
            <ul>
                <li>
                    <a href="">Sales</a>
                </li>
            </ul>
        </li>
        <li>
            <h2 class="ct-footer-list-header">
                Contacto
            </h2>
            <ul>
                <li>
                    <a href="https://api.whatsapp.com/send?phone=+5492994181952">wpp</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/rayen.millahual.12">fc</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/christian_beltran79/">ig</a>
                </li>
                <li>
                    <a href="https://twitter.com/Rayen_raa">tw</a>
                </li>
                <li>
                    <a href="">lk</a>
                </li>
            </ul>
        </li>

</footer>`

function showmenu() {
    document.getElementById("otroModo").classList.toggle("show");
}