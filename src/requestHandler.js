var http = require("http");
var url = require("url");


function iniciar(response, url, method) {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Meli Proxy</h2>");
  response.end();
}

function subir(response, url, method) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

function categories(response, url, method){
  var options = {
    host: 'api.mercadolibre.com',
    port: 80,
    path: '/categories/MLA97994',
    method: 'GET'
  };

  var req = http.request(options, function(response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  req.write('data\n');
  req.write('data\n');
  req.end();

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("API categories");
  response.end();
}

function items(response, url, method){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Items API</h2>");
  response.write("<div>url:" + url + "</div>");
  response.write("<div>method:" + method + "</div>");
}

exports.iniciar = iniciar;
exports.subir = subir;
exports.categories = categories;
exports.items = items;