let a = 4;
let b = 5;

var titolo = "prova"

function modificatore() {
    titolo = "pippo"
}

modificatore()
console.log(titolo);

function addizione(a, b) {
    return a + b;
}

let n = addizione(a, b)

console.log(a,b,n);

console.log(addizione);

let moltiplicazione = (a, b) => a* b;//arrow function


console.log(moltiplicazione(3,4));


