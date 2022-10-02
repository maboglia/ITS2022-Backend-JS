
//Factory function

function creaQuadrato(lato) {
    return {
        lato,
        area(){
            console.log(this.lato * this.lato);
        }
    }
}

const q1 = creaQuadrato(5)
const q2 = creaQuadrato(7)

q1.area()
q2.area()

q1.prototype.diagonale=55;
console.log(q1);


