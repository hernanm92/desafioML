var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");
//seria como la raiz, conoce a todos los modulos de la aplicacion

var handle = {} //objeto con todas las rutas
handle["/"] = requestHandler.iniciar;
handle["/iniciar"] = requestHandler.iniciar;
handle["/subir"] = requestHandler.subir;
handle["/categories/MLA97994"] = requestHandler.categories;
handle["/favicon.ico"] = requestHandler.noMostrar;//ver como hacer para sacar esto
//EN REALIDAD YO TENDRIA QUE HACER UNA UNICA RUTA, QUE TENDRIA QUE PEGARLE A LA API SIEMPRE DE LA MISMA MANERA
//o una por cada categoria, pero con el siguiente parametro variable

server.iniciar(router.route, handle);