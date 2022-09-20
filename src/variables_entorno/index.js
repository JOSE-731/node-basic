
//Para crear la variable de entorno debemos crear las siguientes lineas de codigo:
//El objeto process nos da información sobre el proceso que está ejecutando este script.
//La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.
let nombre = process.env.NOMBRE || 'Sin nombre'; 
let web = process.env.WEB || 'Sin web'

console.log(`Hola ${nombre}`); //Utilizando templaste string
console.log('Web ' + web); //Utilizando la antigua forma de concatenar