var url = require("url");

function route(handle, request, response) {//claro ejemplo de callback
  var pathname = url.parse(request.url).pathname;
  //voy a tener que mostrar hasta la primera division

  console.log("A punto de rutear una peticion para " + pathname);
  if(typeof handle[pathname] === 'function'){
  	//ACA LO A FILTRAR/REGISTRAR EN LA BD
  	handle[pathname](response, request.url, request.method);//le agrego el () para usarlo como funcion (y le paso el response para que el requestHandler pueda devolver su respuesta)	
  }else{
  	console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;