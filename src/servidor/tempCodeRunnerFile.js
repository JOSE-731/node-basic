//Para crear un servidor con expres debemos instalarlo con npm i express
const express = require('express'); //Exportamos express

var app = express(); //Instanciamos la exportacion

app.use('/', function(req, res){ //Definimos la ruta 
    res.send("Hola"); //Damos como respuesta un Hola cada que se consultada la ruta
})

app.listen(3000);//Especificamos el puerto
console.log("Server corriendo")