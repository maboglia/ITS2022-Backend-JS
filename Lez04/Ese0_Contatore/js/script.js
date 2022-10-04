
let counter = 0;

const film = [
    '4,89|La Leggenda del Pianista sull’Oceano',
    '4,88|Forrest Gump',
    '4,88|Le Ali della Libertà',
    '4,88|Schindler’s List',
    '4,88|Il Miglio Verde',
    '4,88|The Artist',
    '4,88|Rain Man – L’Uomo della Pioggia',
    '4,87|Nuovo Cinema Paradiso',
    '4,87|Thelma',
    '4,87|Nosferatu il Vampiro',
    '4,86|Hugo Cabret',
    '4,86|Million Dollar Baby',
    '4,86|The Game – Nessuna Regola',
    '4,86|A Qualcuno Piace Caldo',
    '4,86|Il Pianista',
    '4,85|Il Favoloso Mondo di Amélie',
    '4,85|Sliding Doors',
    '4,84|Revenant – Redivivo',
    '4,84|Storia di una Ladra di Libri',
    '4,84|L’Amore Bugiardo – Gone Girl',
    '4,84|Léon',
    '4,84|Mystic River',
    '4,84|La Stangata',
    '4,83|Le Pagine della Nostra Vita',
    '4,83|Una Lunga Domenica di Passioni',
    '4,83|Il Discorso Del Re',
    '4,83|La Dolce Vita',
    '4,82|Vacanze Romane',
    '4,82|8 1/2',
    '4,82|Il Sorpasso',
    '4,81|Le Vite degli Altri',
    '4,81|The Prestige',
    '4,81|Il Delitto Perfetto',
    '4,81|Il Corvo – The Crow',
    '4,80|Fargo',
    '4,80|Revolver',
    '4,79|Il Segreto dei suoi Occhi',
    '4,79|American Sniper',
    '4,79|Fury',
    '4,79|E’ Stato il Figlio',
    '4,78|Changeling',
    '4,78|A Spasso con Daisy',
    '4,78|Vogliamo Vivere!',
    '4,77|I Goonies',
    '4,77|Salvate il Soldato Ryan',
    '4,77|Vita di Pi',
    '4,77|La Grande Guerra',
    '4,76|Il Signore Degli Anelli – Le Due Torri',
    '4,76|Il Padrino, parte I, II e III',
    '4,76|La Migliore Offerta',
    '4,76|La Parola ai Giurati',
    '4,75|Quarto Potere',
    '4,75|Psyco',
    '4,75|The Elephant Man',
    '4,75|Enter the Void',
    '4,75|I Soliti Sospetti',
    '4,75|Jane Eyre',
    '4,74|The Wolf of Wall Street',
    '4,74|L’Uomo che Uccise Don Chisciotte',
    '4,74|Sette Anime',
    '4,73|Blade Runner 2049',
    '4,73|Matrix',
    '4,73|Blade Runner',
    '4,73|Il Buono, il Brutto, il Cattivo',
    '4,73|Brigsby Bear',
    '4,73|Tutti lo Sanno',
    '4,72|La Donna che Visse due Volte',
    '4,72|Gone Baby Gone',
    '4,71|Sciarada',
    '4,70|Il Cavaliere Oscuro',
    '4,70|Qualcosa è Cambiato',
    '4,70|Quasi Amici',
    '4,70|A Beautiful Mind',
    '4,70|Gran Torino',
    '4,70|Il Lato Positivo – Silver Linings Playbook',
    '4,69|Parasite',
    '4,69|Misery Non Deve Morire',
    '4,69|Il Cliente',
    '4,69|Essi Vivono',
    '4,67|Lo Chiamavano Jeeg Robot',
    '4,67|Nosferatu, il Principe della Notte',
    '4,67|Fantozzi',
    '4,67|Qualcosa di Personale',
    '4,66|Il Signore degli Anelli – La Compagnia dell’Anello',
    '4,65|Pane e Tulipani',
    '4,65|Il Silenzio degli Innocenti',
    '4,65|Questione di Tempo',
    '4,65|Il Gattopardo',
    '4,65|Il Quinto Elemento',
    '4,64|Seven',
    '4,63|Inside Out',
    '4,63|IL Re Leone',
    '4,63|Kill Bill, vol. 1 e 2',
    '4,63|Match Point',
    '4,62|L’Avvocato del Diavolo',
    '4,62|L’Esorcista',
    '4,62|The Astronaut’s Wife – La Moglie dell’Astronauta',
    '4,62|Mediterraneo',
    '4,61|La 25ª Ora',
    '4,60|Il Grande Gatsby',
];

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
