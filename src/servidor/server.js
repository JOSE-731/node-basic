//Para crear un servidor con expres debemos instalarlo con npm i express
const express = require('express'); //Exportamos express
const router = express.Router(); //Añadiendo el router a la aplicacion de express

var app = express(); //Instanciamos la exportacion

app.use(router);
/*app.use('/', function(req, res){ //Definimos la ruta que se activará cuando sea ejecute
    res.send("Hola"); //Damos como respuesta un Hola cada que se consultada la ruta
})*/

router.get('/', function(req, res){
    res.send("Listando mensajes")
    console.log("Server corriendo")
})

router.post('/menssage', function(req, res){
    res.send("Agregando mensaje")
})

router.delete('/delete', function(req, res){
    res.send("Eliminando mensaje")
})



app.listen(3000);//Especificamos el puerto