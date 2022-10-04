
let counter = 0;



const divContatore = document.getElementById('contatore');
const divFilm = document.getElementById('film');
const btnDown = document.getElementById('down');
const btnUp = document.getElementById('up');



btnDown.onclick = function(){
    decrementa();
    showCounter();
    showFilm();
}

btnUp.addEventListener('click', function(){
    incrementa();
    showCounter();
    showFilm();
});

console.log(typeof divContatore);


function showFilm() {
    divFilm.style = `font-size: 1.${counter}em;
    color: red;`;
    divFilm.textContent = film[counter];
}


function incrementa() {
    // counter = counter + 1;
    // counter += 1;
    counter++;
}
function decrementa() {
    counter--;
}
function showCounter() {
    divContatore.textContent = counter;
}
