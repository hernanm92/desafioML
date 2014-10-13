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

function categories(responseA, url, method){
  /*var options = {
    host: 'www.adoos.com.ar/',
    port: 80,
    path: '/api/list?CountryID=ES&CategoryID=311',
    method: 'GET'
  };*/

  var req = http.request('http://www.adoos.com.ar/api/post?PostBaseID=a4e58773e1dbabd3e3aed94e83cc0050', function(response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log('BODY: ' + chunk);
      responseA.writeHead(200, {"Content-Type": "text/html"});
      responseA.write('<pre>BODY: ' + chunk + '</pre>');
      responseA.end();
    });
  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
  });

  // write data to request body
  req.write('data\n');
  req.write('data\n');
  req.end();

  //response.writeHead(200, {"Content-Type": "text/html"});
  //response.write("API categories");
  //response.end();
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