const fechaHoy = Date();
const fechnac = new Date(2001, 7, 15, 7, 10);
const tarde = fechaHoy > fechnac;
const dia = fechnac.getDate()
const mes = fechnac.getMonth() + 1;
const año = fechnac.getFullYear();


console.log(fechaHoy)
console.log(fechnac)
console.log(dia)
console.log(mes)
console.log(año)