const saluto = 'Hello, world!';//string
//saluto = 5;//number
//saluto = 5.6;
//saluto = true;//boolean
console.log(typeof saluto);

let a = 9;
//struttura di selezione
if (a > 10){
    console.log('a è maggiore di 10')
} else {
    console.log('a NON è maggiore di 10')
}

//struttura di iterazione
for (let i = 1; i <= 6; i++){
    document.write('<h'+i+'>ripetizione n. ' + i+'</h'+i+'>');
}
