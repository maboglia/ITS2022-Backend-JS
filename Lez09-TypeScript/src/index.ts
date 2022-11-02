
let a: number;
//number, string, boolean, null, undefined, object
//any, unknown, never, enum, tuple

a = 123_456_789;
//a = true;

// let voti = [1,2,3];
// voti.forEach(v => console.log(v));

// let utente: [number, string] = [1, 'pippo'];
// 

// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Taglia {SMALL = 'piccola', MEDIUM='media', LARGE='grande'}

// console.log(Taglia.MEDIUM);

//type aliases
type Studente = {
    readonly nMat: number, 
    nome?: string,
    daiEsame: () => void
};


let studente: Studente = {
    nMat: 1, 
    
    daiEsame: () => {
        console.log('PHP');
    }
};
studente.nome = 'pippo';
//studente.nMat = 12;

//optional property access
studente.nome.toUpperCase();


type Draggable = {
    drag: () => void
}

type Droppable = {
    drop: () => void
}

type UIwidget = Draggable & Droppable;

let textField: UIwidget = {
    drag: () => {},
    drop: () => {}
}



function stampa(doc: string | number | null): string{

    if (typeof doc === 'string')
        return 'stringa!!!!'
    else
    //console.log(doc);
        return 'numero!!!!!!!!!!!!!';
}
    
//literal
type Quantita =  50 | 75 | 100;

type TipologiaBirra = 'media'|'grande'|'caraffa'
let quantita: Quantita;

let birra: TipologiaBirra;

birra = 'media';

quantita = 75;
