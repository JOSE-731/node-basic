//Para crear un servidor con expres debemos instalarlo con npm i express
const express = require('express'); //Exportamos express
const bodyParser = require('body-parser');//Body parser:Es un modulo que nos permite trabajar de forma mas sencilla con el body de la aplicacion
const router = express.Router(); //Añadiendo el router a la aplicacion de express
//npm i body-parser
var app = express(); //Instanciamos la exportacion de express
app.use(express.json());
app.use(router);
/*app.use('/', function(req, res){ //Definimos la ruta que se activará cuando sea ejecute
    res.send("Hola"); //Damos como respuesta un Hola cada que se consultada la ruta
})*/

router.get('/', function(req, res){
    res.send("Listando mensajes")
})

router.post('/menssage', function(req, res){
    res.send("Agregando mensaje")
    console.log(`Request ${req}`);
})

router.delete('/delete', function(req, res){
    res.send("Eliminando mensaje")
})

console.log("Server corriendo")
app.listen(3000);//Especificamos el puerto