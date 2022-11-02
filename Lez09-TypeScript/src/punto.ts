
//Pascal case
export class Punto {

    constructor(private _x?: number, private _y?: number){

    }

    set x(valore: number){
        this._x = valore;
    }

    get x(): number{
        if (this._x != undefined)
            return this._x;
        else
            return 0;
    }

    disegna(): void{
        console.log("x: " + this.x + " y: " + this.y);
    }

}