export default class Cl_empresa {
    constructor() {
        this.acumTotal = 0;
    }

    procesarTrabajador(trabajador) {
        this.acumTotal += trabajador.salario();
    }

    montoTotal() {
        return this.acumTotal;
    }
}