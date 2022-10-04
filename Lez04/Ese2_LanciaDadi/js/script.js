
const dado1 = {
    facce: 6,
    faccia: 1,
    lancia: function(){
        console.log('funziona');
    }
};

/* Bottone lancia */
const btnLancia = document.createElement('button');
btnLancia.textContent = 'Lancia dadi';
btnLancia.addEventListener('click', function () {
    let casuale = parseInt(Math.random() * dado1.facce) + 1
    let casuale2 = parseInt(Math.random() * dado1.facce) + 1
    cambiaFaccia(imgDado1, casuale)
    cambiaFaccia(imgDado2, casuale2)
    if (casuale == casuale2)
        alert("hai vinto!!!")
})
/* Bottone lancia -- fine */

/* Img dado1 */
const imgDado1 = document.createElement('img');
cambiaFaccia(imgDado1, 1)

const imgDado2 = document.createElement('img');
cambiaFaccia(imgDado2, 2)
//funzioni utili
function cambiaFaccia(dado, valore) {
    dado.src = `./img/f${valore}.jpg`
}


/*aggiungi al body*/

document.body.appendChild(btnLancia);
document.body.appendChild(imgDado1);
document.body.appendChild(imgDado2);

