const DIV_BANDIERE = document.getElementById('bandiere')
const container = document.querySelector('.container')

const URL = 'https://restcountries.com/v3.1/region/';

const regioni = ['europe', 'asia', 'america', 'africa', 'oceania'];

const BUTTON = document.createElement('button')
BUTTON.textContent = 'sgnaca'

BUTTON.onclick = function () {
    fetch(URL + 'europe')
        .then(paesiJSON => paesiJSON.json())
        .then(paesiJS => {
            [...paesiJS]
                .filter(p => p.population > 30000000)
                .forEach(p => console.log(p.name.official, p.population))
        
        })
} 

container.insertBefore(BUTTON, DIV_BANDIERE);

const SELECT = document.createElement('select')
SELECT.id = "tendina"

for (const regione of regioni) {
    const INPUT = document.createElement('option')
    INPUT.textContent = regione
    SELECT.appendChild(INPUT)
}

container.insertBefore(SELECT, DIV_BANDIERE);

document
    .getElementById('tendina')
    .addEventListener('change', function () {
        let regione = this.value; 

        fetch(URL + regione)
            .then(collezione => collezione.json())
            .then(collezioneJS => {
                DIV_BANDIERE.innerHTML = ''
                for (const paese of collezioneJS) {
                    const FLAG =paese.flags.png;

                    const IMG = document.createElement('img');
                    IMG.className = 'img-thumbnail col-xl-1 col-md-2 col-sm-4';
                    IMG.src = FLAG;
                    IMG.setAttribute('alt', paese.name.official )
    
                    DIV_BANDIERE.appendChild(IMG)
                }
            })
    });