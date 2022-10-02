const TITLE = document.getElementById('titolo');
const BTN = document.getElementById('add');
const INPUT = document.getElementById('todo');
const LISTA = document.getElementById('lista');


TITLE.innerHTML = "Todo list";

BTN.onclick = aggiungi;

function aggiungi() {
    //1) leggi input utente
    let cosaDaFare = INPUT.value;
    //2) aggiungi input alla lista
    inserisci(cosaDaFare);
    console.log('vuoi comprare: ' + cosaDaFare);
    //3) pulisci il campo input
    pulisci();
}

function inserisci(cosa) {
    LISTA.innerHTML += '<li>' + cosa + '</li>';
}

function pulisci() {
    INPUT.value = '';
}

//aggiungi();//hoisting