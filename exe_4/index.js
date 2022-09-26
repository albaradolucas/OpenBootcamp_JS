const nombre = "Lucas ";
const apellido = "González";
const estudiante = nombre.concat(" ").concat(apellido);
const estudianteMayus = estudiante;
const estudianteMinus = estudiante;
const numletras = estudiante;
const primlet = nombre;
const ultlet = apellido;
const nospace = estudiante;
const esta = nombre;

console.log(estudiante);
console.log(estudianteMayus.toUpperCase());
console.log(estudianteMinus.toLowerCase());
console.log(numletras.length);
console.log(primlet.charAt());
console.log(ultlet.substring(apellido.length -1));
console.log(nospace.replace(/ /g, ""));
console.log(estudiante.includes(nombre))
