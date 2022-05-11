
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
function Carrousel(direction, carrouselId, number) {
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
            console.log(nombre);
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
            console.log(nombre);

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
        fleche.href = "#" + $('section')[1].id;
    }
}

/* caroussel logo
-------------------------------*/

// var countcaroussel2 = 0;
// let tableauimage2 = document.querySelectorAll(".imgcarousselchildren2");
// const before2 = document.querySelector(".before2");
// const after2 = document.querySelector(".after2");
// console.log(before2);


// console.log(after2);
// before2.addEventListener("click", function () {
//     console.log('Yessir');
//     if (window.matchMedia("(min-width: 500px)").matches) {
//         countcaroussel2 -= 1;

//         if (countcaroussel2 < 0) {
//             countcaroussel2 = tableauimage2.length - 4;
//         }
//         for (let i = 0; i < tableauimage2.length; i++) {
//             const element = tableauimage2[i];
//             element.style.transform =
//                 "translateX(-" + 100 * countcaroussel2 + "%)";
//         }
//     } else {
//         countcaroussel2 -= 1;

//         if (countcaroussel2 < 0) {
//             countcaroussel2 = tableauimage2.length - 1;
//         }
//         for (let i = 0; i < tableauimage2.length; i++) {
//             const element = tableauimage2[i];
//             element.style.transform =
//                 "translateX(-" + 100 * countcaroussel2 + "%)";

//         }
//     }
// });
// after2.addEventListener("click", function () {
//     console.log('Yessir');

//     if (window.matchMedia("(min-width: 500px)").matches) {

//         countcaroussel2 += 1;
//         if (countcaroussel2 >= tableauimage2.length - 3) {
//             countcaroussel2 = 0;
//         }
//         for (let i = 0; i < tableauimage2.length; i++) {
//             const element = tableauimage2[i];
//             element.style.transform = "translateX(-" + 100 * countcaroussel2 + "%)";
//         }
//     } else {
//         countcaroussel2 += 1;
//         if (countcaroussel2 >= tableauimage2.length) {
//             countcaroussel2 = 0;
//         }
//         for (let i = 0; i < tableauimage2.length; i++) {
//             const element = tableauimage2[i];
//             element.style.transform = "translateX(-" + 100 * countcaroussel2 + "%)";
//         }
//     }
// });


// let fleche2 = document.querySelector('.fleche2>a');
// if (fleche2) {
//     if (fleche2.href === window.location.href || fleche2.href === window.location.href + "#") {
//         fleche2.href = "#" + $('section')[1].id;
//     }
// }


/* AVIS CLIENTS */

let avisClients = document.querySelectorAll('.avisClient');
let avisClients2 = document.querySelectorAll('.avisClient:nth-child(n+4)');
let avisClients3 = document.querySelectorAll('.avisClient:nth-child(-n+3)');
let AvisButton = document.querySelector('#voirplusavis')
let AvisSection = document.querySelector('#AvisSection')
let countAvis = 0;

// avisClients[0].style.display = "flex";
// avisClients[1].style.display = "flex";
if (avisClients.length != 0) {

    AvisButton.addEventListener('click', function () {
        avisClients3.forEach(element => {
            element.classList.toggle('lg:border-b-2');
        });
        avisClients2.forEach(element => {
            element.classList.toggle('lg:p-0');
            element.classList.toggle('lg:max-h-0');
            element.classList.toggle('lg:max-h-96');
        });
        avisClients.forEach(element => {
            element.classList.toggle('lg:shadow-none');
            element.classList.toggle('lg:p-10');

        });
        AvisSection.classList.toggle('lg:gap-0');

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
    item.previousElementSibling.querySelector('span').classList.toggle('max-h-96');
    item.previousElementSibling.querySelector('span').classList.toggle('text-[0]');
    item.previousElementSibling.querySelector('span').classList.toggle('opacity-100');
}

/* GOOGLE MAPS API */

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

window.initMap = initMap;