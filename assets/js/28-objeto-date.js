                                                                console.warn('EJERCICIO N° 1 ');

console.log(Date());;

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); //Dia del mes
//Dia de la semana D - L - M - MI - J - V - S <--> 0 1 2 3 4 5 6
console.log("Viernes:", fecha.getDay());
//Dic --> 0 1 2 3 4 5 6 7 8 9 10 11
console.log("Septiembre:", fecha.getMonth());;

console.log(fecha.getYear());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumple = new Date(1989,11,28);
console.log(cumple);
