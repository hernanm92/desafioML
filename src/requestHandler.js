function iniciar(response) {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Meli Proxy</h2>");
  response.end();
}

function subir(response) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

function noMostrar(response){//para que no muestre favicon.ico
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end();	
}

function categories(response){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("API categories");
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.categories = categories;
exports.noMostrar = noMostrar;