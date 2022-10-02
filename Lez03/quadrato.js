//OOP 

const quadrato = {

    lato: 5, 
    diagonale: 'non la so',
    area: function () {
        console.log(this.lato * this.lato);
    }

};


//console.log(quadrato);
quadrato.area()