var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");
//seria como la raiz, conoce a todos los modulos de la aplicacion

//<script src="http://static.mlstatic.com/org-img/sdk/mercadolibre-1.0.4.js"></script>

var handle = {} //objeto con todas las rutas
handle["/"] = requestHandler.iniciar;
handle["/iniciar"] = requestHandler.iniciar;
handle["/subir"] = requestHandler.subir;
handle["/apiml"] = requestHandler.apiml;
handle["/categories"] = requestHandler.categories;
handle["/adoos"] = requestHandler.adoos;
handle["/items"] = requestHandler.items;
handle["/twitter"] = requestHandler.twitter;
handle["/redhat"] = requestHandler.redhat;
handle["/api"] = requestHandler.api;
//EN REALIDAD YO TENDRIA QUE HACER UNA UNICA RUTA, QUE TENDRIA QUE PEGARLE A LA API SIEMPRE DE LA MISMA MANERA
//o una por cada categoria, pero con el siguiente parametro variable

server.iniciar(router.route, handle);