
/* ANIMATION BURGER */

let burger = document.querySelector('#burger');
let menuBurger = document.querySelector('#menuBurger');
burger.addEventListener('click', function () {
    menuBurger.classList.toggle('invisible');
    menuBurger.classList.toggle('max-h-0');
    menuBurger.classList.toggle('max-h-96');
    menuBurger.classList.toggle('p-7');
})


/* ANIMATION CARROUSEL */

let imagevisible = 0;
let mesimages = document.querySelectorAll("img.hidden");
let dots = document.querySelectorAll("span.opacity-50");
const avant = document.querySelector(".avant");
const apres = document.querySelector(".apres");

mesimages[imagevisible].style.display = "block";
dots[imagevisible].style.opacity = "1";

function imagePrecedente() {
    console.log("Yessir");
    mesimages[imagevisible].style.display = "none";
    dots[imagevisible].style.opacity = "0.5";
    imagevisible -= 1;
    if (imagevisible === -1) {
        imagevisible = mesimages.length - 1;
    }

    mesimages[imagevisible].style.display = "block";
    dots[imagevisible].style.opacity = "1";
}

function imageProchaine() {
    mesimages[imagevisible].style.display = "none";
    dots[imagevisible].style.opacity = "0.5";

    imagevisible += 1;
    if (imagevisible === mesimages.length) {
        imagevisible = 0;
    }

    mesimages[imagevisible].style.display = "block";
    dots[imagevisible].style.opacity = "1";
}

apres.addEventListener("click", imageProchaine);
avant.addEventListener("click", imagePrecedente);
