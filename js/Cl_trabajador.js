export default class Cl_trabajador {
    constructor(nombre, horasRegulares, horasExtras) {
        this.nombre = nombre;
        this.horasRegulares = horasRegulares;
        this.horasExtras = horasExtras;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set horasRegulares(horasRegulares) {
        this._horasRegulares = horasRegulares;
    }
    get horasRegulares() {
        return this._horasRegulares;
    }
    set horasExtras(horasExtras) {
        this._horasExtras = horasExtras;
    }
    get horasExtras() {
        return this._horasExtras;
    }

    salario() {
        return this.horasRegulares * 10 + this.horasExtras * 25;
    }
}