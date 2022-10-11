const DIV_BANDIERE = document.getElementById('bandiere')

const xhr = new XMLHttpRequest();

const URL = 'https://restcountries.com/v3.1/region/europe';

const regioni = ['europe', 'asia', 'america', 'africa', 'oceania'];

const container = document.querySelector('.container')

const SELECT = document.createElement('select')
SELECT.id = "tendina"

for (const regione of regioni) {
    const INPUT = document.createElement('option')
    INPUT.textContent = regione
    SELECT.appendChild(INPUT)
}

container.insertBefore(SELECT, DIV_BANDIERE);

xhr.onreadystatechange = function(){

    if (this.readyState == 4){
        if (this.status== 200){

            let rispostaJS = JSON.parse(this.responseText);

            
            for (const paese of rispostaJS) {
                const FLAG =paese.flags.png;

                const IMG = document.createElement('img');
                IMG.className = 'img-thumbnail col-xl-1 col-sm-4';
                IMG.src = FLAG;
                IMG.setAttribute('alt', paese.name.official )

                DIV_BANDIERE.appendChild(IMG)

                
            }
        }

    }

}

xhr.open('GET', URL);
xhr.send();

