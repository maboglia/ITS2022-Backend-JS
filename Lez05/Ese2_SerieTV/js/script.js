const lista = document.getElementById('serie')
const LIST_ITEM = document.getElementsByTagName('li')

const GOOGLE_SEARCH = 'https://www.google.com/search?q='
const TVMAZE_SEARCH = 'https://api.tvmaze.com/search/shows?q='


const serietv = [
    'Black Bird',
    'Christian',
    'Euphoria 2',
    'In nome del cielo',
    'I May Destroy You',
    'Il Re',
]

serietv.forEach(s => lista.appendChild(creaLi(s)))


for (const punto of LIST_ITEM) {
    //console.log(punto.textContent);
    punto.addEventListener('click', (e)=>location.href = TVMAZE_SEARCH + e.target.textContent
    );
}

// for (const serie of serietv) {
//     lista.appendChild(creaLi(serie))
// }

function creaLi(testo) {
    const LI = document.createElement('li')
    LI.textContent = testo
    return LI 
}
