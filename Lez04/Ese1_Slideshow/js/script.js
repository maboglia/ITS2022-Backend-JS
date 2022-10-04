
const titoli = document.getElementsByTagName('h1');

const titolo = titoli[0];

const numeroImg = IMAGES.length;
let counter = 0;

function incrementa() {
    counter++;
    if (counter>=numeroImg)
        counter = 0;
}

function decrementa() {
    counter--;
    if (counter < 0)
        counter = 0;
}

titolo.textContent = "SlideShow bellissimo<br>pippo";

const bottone = document.createElement('button')
bottone.textContent = 'cambia immagine'

bottone.addEventListener('click', function (e) {
    incrementa();
    foto.src = IMAGES[counter].path;
})

const foto = document.createElement('img');

foto.className = 'foto';
foto.src = IMAGES[0].path;
document.body.appendChild(bottone);
document.body.appendChild(foto);