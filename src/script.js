
/* ANIMATION BURGER */

let burger = document.querySelector('#burger');
let menuBurger = document.querySelector('#menuBurger');
burger.addEventListener('click', function () {
    menuBurger.classList.toggle('invisible');
    menuBurger.classList.toggle('max-h-0');
    menuBurger.classList.toggle('max-h-96');
    menuBurger.classList.toggle('p-7');
})