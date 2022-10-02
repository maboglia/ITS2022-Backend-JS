
function Quadrato(lato) {
    
    this.lato = lato;
    this.area = function () {
        return this.lato * this.lato;
    }

}

const q1 = new Quadrato(5);

for (const key in q1) {
    
    console.log(key + ': ' + q1[key]);

}
