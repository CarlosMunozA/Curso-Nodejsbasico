const express = require('express');
const colors = require('colors');
const server = express();
server.get('/', function(req,res){
    res.send('<h1> Hola mundo con express y node </h1>');
    res.end();
});
server.listen(3000, function(){
    console.log('Server on port 3000'.red);
});



//const http = require('http');
//const colors = require('colors');

// req=request, res=respuesta del server
/*opción 1, todo dentro
http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo </h1>');
    res.end();
}).listen(3000);
*/
//opcion 2 guardar en  una constate y llamar al metodo

/*const handleServer = function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h1>Hola mundo hola pirinola </h1>');
    res.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('Server on port 3000'.magenta);
});
*/
//la consola queda abierta en el puerto 3000, ctrl+c dos veces y se sale del server
/* leer lo que hay en un doc y pasarlo a string
const fs = require('fs');
fs.readFile('./texto.txt',function(err,data){
    if (err){
        console.log(err);
    }
        console.log(data.toString());
    
})
*/

//crear archivos
/*const fs = require('fs');

fs.writeFile('./texto.txt','linea uno', function(err){
if (err){
    console.log(err);
}
console.log('Archivo creado');
});
//se va a ejecutar primero el console.log de abajo por que node js le pidio al so que hiciera algo
// y mientras se realiza esa acción se continúa ejecutando el código
console.log('ultima linea de codigo');

const users = query('SELECT * FROM users');

//el siguiente es un ejemplo de como trabajariamos con una base de datos, 
query('Select * FROM users', function (err, users){
   if (err){
       console.log(err);
   } 
   if (users){

   }
})

*/

/*const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ',os.freemem());
console.log('total mem: ',os.totalmem());
*/


/*const math = require('./math.js');

console.log(math.divide(2,4));
console.log(math.multiply(2,4));
console.log(math.substract(2,4));
console.log(math.add(2,4));

console.log(math);
*/