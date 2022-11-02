"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
class Punto {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    set x(valore) {
        this._x = valore;
    }
    get x() {
        if (this._x != undefined)
            return this._x;
        else
            return 0;
    }
    disegna() {
        console.log("x: " + this.x + " y: " + this.y);
    }
}
exports.Punto = Punto;
//# sourceMappingURL=punto.js.map