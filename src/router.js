function route(pathname, handle, response) {//claro ejemplo de callback
  console.log("A punto de rutear una peticion para " + pathname);
  if(typeof handle[pathname] === 'function'){
  	handle[pathname](response);//le agrego el () para usarlo como funcion (y le paso el response para que el requestHandler pueda devolver su respuesta)	
  }else{
  	console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;