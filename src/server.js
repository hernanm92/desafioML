var http = require("http");

function iniciar(){
	function onRequest(request, response) {
	  console.log("Peticion Recibida.");//cada vez que haya un request loggea en el servidor
	  response.writeHead(200, {"Content-Type": "text/html"});//encabezado
	  response.write("<h2>Hola Mundo!!</h2>");
	  response.end();
	}

	http.createServer(onRequest).listen(8888);//tiene un loop para volver a ejecutarse cuando hay eventos
	//le estoy pasando la funcion commo parametro (callback)
	//pero sin usar expresiones lambda

	//node js va a manejar los request de manera asincronica. A medida que escucha, los va a ir manejando como eventos
	//(sin generar nuevos procesos como apache)

	console.log("Servidor Iniciado.");

	//ver como responderle a un cliente especifico (no algo harcodeado para todos)
}

exports.iniciar = iniciar; //exporto las funciones para que puedan ser utilizadas fuera del modulo