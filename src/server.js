var http = require("http");
var url = require("url");

function iniciar(route, handle){
	function onRequest(request, response) {
	  var pathname = url.parse(request.url).pathname;
	  console.log("Petición para " + pathname + " recibida.");//cada vez que haya un request loggea en el servidor
	  //console.log(request.url);//tambien te muestra los parametros
	  //console.log(request.ip);
	  //console.log(request.ips);

	  //me muestra la ip que hace el request
	  console.log(getRequestIP(request));

	  route(pathname, handle, response);//le delego a cada uno su responsabilidad (en este caso manejar las rutas)
	}

	http.createServer(onRequest).listen(8888);//tiene un loop para volver a ejecutarse cuando hay eventos
	//le estoy pasando la funcion commo parametro (callback)
	//pero sin usar expresiones lambda

	//node js va a manejar los request de manera asincronica. A medida que escucha, los va a ir manejando como eventos
	//(sin generar nuevos procesos como apache)

	console.log("Servidor Iniciado.");

	//ver como responderle a un cliente especifico (no algo harcodeado para todos)
}

function getRequestIP(request){
  return (request.headers['x-forwarded-for'] || '').split(',')[0] 
        || request.connection.remoteAddress;

}

exports.iniciar = iniciar; //exporto las funciones para que puedan ser utilizadas fuera del modulo
