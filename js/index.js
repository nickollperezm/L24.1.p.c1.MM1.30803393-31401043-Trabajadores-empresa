/*
Se conoce de cada uno de los trabajadores de una empresa su nombre, número de horas 
trabajadas en tiempo regular y número de horas extra. La hora en tiempo regular se paga a 
10$. y la hora en tiempo extra se paga a 25$. Se desea que el programa genere el nombre y 
salario obtenido de cada trabajador; además se requiere el monto total de nómina pagada. 

Se dispone de los siguientes datos de varios trabajadores: (nombre, número de horas 
regular, números de horas extra) (Mary, 30, 10), (José, 35,5), (Carlos, 35,0), (Pedro, 25, 10) 

El trabajador Mary tiene un salario de: 550$ 
El trabajador José tiene un salario de: 475$ 
El trabajador Carlos tiene un salario de: 350$ 
El trabajador Pedro tiene un salario de: 500$ 

Monto total de nómina pagada: 1875$
*/

import Cl_empresa from "./Cl_empresa.js";
import Cl_trabajador from "./Cl_trabajador.js";

let empresa = new Cl_empresa();
let trabajador1 = new Cl_trabajador("Mary", 30, 10);
let trabajador2 = new Cl_trabajador("José", 35, 5);
let trabajador3 = new Cl_trabajador("Carlos", 35, 0);
let trabajador4 = new Cl_trabajador("Pedro", 25, 10);
empresa.procesarTrabajador(trabajador1);
empresa.procesarTrabajador(trabajador2);
empresa.procesarTrabajador(trabajador3);
empresa.procesarTrabajador(trabajador4);

let salida = document.getElementById("salida");
salida.innerHTML = `
El trabajador ${trabajador1.nombre} tiene un salario de: ${trabajador1.salario()}$
<br>El trabajador ${trabajador2.nombre} tiene un salario de: ${trabajador2.salario()}$
<br>El trabajador ${trabajador3.nombre} tiene un salario de: ${trabajador3.salario()}$
<br>El trabajador ${trabajador4.nombre} tiene un salario de: ${trabajador4.salario()}$
<br>
<br>Monto total de nómina pagada: ${empresa.montoTotal()}$
`;