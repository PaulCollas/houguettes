
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

let imgcarrousel = document.querySelectorAll('.imgcarrousel');
let texteLocation = document.querySelectorAll('.texteLocation');

let dots = document.querySelector('#dots');

imgcarrousel.forEach(_element => {

    dots.innerHTML += '<span class="h-5 w-5 rounded-full bg-blue opacity-20 cursor-pointer"></span>';
});

let allDots = document.querySelectorAll('#dots>span');

if (allDots.length != 0) {

    allDots[0].style.opacity = "1";
    texteLocation[0].style.display = "block";

    for (let i = 0; i < allDots.length; i++) {
        const element = allDots[i];
        const pelement = texteLocation[i];

        element.addEventListener('click', function () {
            document.querySelector('#containercarrousel').scrollLeft = (imgcarrousel[i].clientWidth * i);
            for (let o = 0; o < allDots.length; o++) {
                const element2 = allDots[o];
                element2.style.opacity = "0.2";
            }
            for (let a = 0; a < texteLocation.length; a++) {
                const element3 = texteLocation[a];
                element3.style.display = "none";
            }
            element.style.opacity = "1";
            pelement.style.display = "block";
        })
    }


    document.querySelector('#containercarrousel').addEventListener('scroll', function () {

        for (let i = 0; i < allDots.length; i++) {
            const element = allDots[i];
            const pelement = texteLocation[i];

            if (document.querySelector('#containercarrousel').scrollLeft == imgcarrousel[i].clientWidth * i) {
                for (let o = 0; o < allDots.length; o++) {
                    const element2 = allDots[o];
                    element2.style.opacity = "0.2";
                }
                for (let a = 0; a < texteLocation.length; a++) {
                    const element3 = texteLocation[a];
                    element3.style.display = "none";
                }
                element.style.opacity = "1";
                pelement.style.display = "block";
            }
        }
    })
}

/* caroussel logo
-------------------------------*/


let countcaroussel = 0;
let count2 = 0
let test;

function Carrousel(direction, carrouselId, number) {
    count2++;

    if (count2 == 1) {
        test = carrouselId;
    }

    if (test != carrouselId) {
        countcaroussel = 0;
        test = carrouselId;
    }

    let tableauimage = document.querySelectorAll("#" + carrouselId + "> .imgcarousselchildren");
    let nombre = 0;
    if (number != 1) {
        nombre = 3;
    } else if (number === 1) {
        nombre = 1;
    }
    if (direction === "left") {

        if (window.matchMedia("(min-width: 500px)").matches) {
            countcaroussel -= 1;
            if (countcaroussel < 0) {
                countcaroussel = tableauimage.length - (nombre);
            }
            for (let i = 0; i < tableauimage.length; i++) {
                const elements = tableauimage[i];
                elements.style.transform =
                    "translateX(-" + 100 * countcaroussel + "%)";
            }
        } else {
            countcaroussel -= 1;

            if (countcaroussel < 0) {
                countcaroussel = tableauimage.length - 1;
            }
            for (let i = 0; i < tableauimage.length; i++) {
                const elements = tableauimage[i];
                elements.style.transform =
                    "translateX(-" + 100 * countcaroussel + "%)";

            }
        }

    } else if (direction === "right") {
        if (window.matchMedia("(min-width: 500px)").matches) {
            countcaroussel += 1;

            if (countcaroussel >= tableauimage.length - (nombre - 1)) {
                countcaroussel = 0;
            }
            for (let i = 0; i < tableauimage.length; i++) {
                const elements = tableauimage[i];
                elements.style.transform = "translateX(-" + 100 * countcaroussel + "%)";
            }
        } else {
            countcaroussel += 1;

            if (countcaroussel >= tableauimage.length) {
                countcaroussel = 0;
            }
            for (let i = 0; i < tableauimage.length; i++) {
                const elements = tableauimage[i];
                elements.style.transform = "translateX(-" + 100 * countcaroussel + "%)";
            }
        }

    } else {
        console.log('Erreur - Carrousel')
    }

}




let fleche = document.querySelector('.fleche>a');
if (fleche) {
    if (fleche.href === window.location.href || fleche.href === window.location.href + "#") {
        fleche.href = "#" + document.querySelectorAll('section')[1].id;
    }
}

/* AVIS CLIENTS */

let avisClients = document.querySelectorAll('.avisClient');
let avisClients2 = document.querySelectorAll('.avisClient:nth-child(n+5)');
let avisClients3 = document.querySelectorAll('.avisClient:nth-child(-n+4)');
let AvisButton = document.querySelector('#voirplusavis')
let AvisSection = document.querySelector('#AvisSection')
let countAvis = 0;

// avisClients[0].style.display = "flex";
// avisClients[1].style.display = "flex";
if (avisClients.length != 0) {

    AvisButton.addEventListener('click', function () {
        avisClients3.forEach(element => {
            element.classList.toggle('border-t-2');
        });
        avisClients2.forEach(element => {
            element.classList.toggle('p-0');
            element.classList.toggle('p-6');
            element.classList.toggle('max-h-0');
            element.classList.toggle('max-h-96');
        });
        avisClients.forEach(element => {
            element.classList.toggle('shadow-[0_0px_10px_0_rgba(0,0,0,0.3)]');
            element.classList.toggle('lg:p-10');

        });
        AvisSection.classList.toggle('gap-10');
        AvisSection.classList.toggle('lg:gap-0');
        AvisButton.classList.toggle('border-t-2');
        countAvis++;
        if (countAvis % 2 === 1) {

            AvisButton.innerHTML = ('En voir moins')
        } else {
            AvisButton.innerHTML = ('En voir plus')

        }
    })
}

/* SINGLE LOCATION ANIMATION */

function SingleLocateShowImage(item) {
    console.log(item.classList.contains("border-2"));
    document.querySelectorAll('.imgLocationSingle').forEach(element => {
        if (element.classList.contains('border-2')) {

            element.classList.remove('border-2');
            element.classList.remove('border-solid');
            element.classList.remove('border-blue');
        }
    })
    document.getElementById('imagePresentation').src = item.src
    item.classList.toggle('border-2');
    item.classList.toggle('border-solid');
    item.classList.toggle('border-blue');
}

function ChangeText(item) {
    if (item.innerHTML !== "En voir moins") {
        item.innerHTML = "En voir moins";
    } else {
        item.innerHTML = "En voir plus ...";
    }
    item.previousElementSibling.classList.toggle('line-clamp-3');
    item.previousElementSibling.classList.toggle('lg:line-clamp-5');
}

/* MAPS API */

if (document.getElementById('map')) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaXRjaCIsImEiOiJja3R3cWw2cGUwd3d0MzBwODNuODNsZjBjIn0.8Z1IjDqZ1sGpn7UqaO8qGQ';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.36964669993827215, 49.18182136994545],
        zoom: 9
    });
}

function ReadMoreText(item) {
    item.previousElementSibling.classList.toggle('line-clamp-2');
    if (item.innerHTML !== "En voir moins") {
        item.innerHTML = "En voir moins";
    } else {
        item.innerHTML = "En voir plus ...";
    }
}


function Accordion(item) {
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('max-h-0');
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('max-h-[100rem]');
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('p-5');
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('lg:px-10');
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('gap-0');
    item.parentNode.querySelector('div:nth-child(2)').classList.toggle('gap-3');
    item.querySelector('.accordion > div:nth-child(1) > svg').classList.toggle('rotate-180');
}

function ChangePhotoProfil() {
    document.querySelector('.profilactuel').src = URL.createObjectURL(event.target.files[0]);
}

function ChooseLanguage(item) {
    document.querySelector('.otherLanguage').classList.toggle('max-h-0');
    document.querySelector('.otherLanguage').classList.toggle('max-h-96');
    document.querySelector('.otherLanguage').classList.toggle('pt-2');
    let actualUrl = document.querySelector('#actualLanguage').src;
    document.querySelector('#actualLanguage').src = item.src;
    item.src = actualUrl;
}