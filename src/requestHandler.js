var http = require("http");
var https = require("https");
//var express = require('express');
var url = require("url");
var util = require("util");
//var request = require('request'); //otra forma de pegarle a una url


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

function adoos(responseA, url, method){
  var req = http.request('http://www.adoos.com.ar/api/post?PostBaseID=a4e58773e1dbabd3e3aed94e83cc0050', function(response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log('BODY: ' + chunk);
      responseA.writeHead(200, {"Content-Type": "text/html"});
      responseA.write('<code>BODY: ' + chunk + '</code>');
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

}

/*function categories(responseA, url, method){*/
  /*var options = {
    host: 'www.adoos.com.ar/',
    port: 80,
    path: '/api/list?CountryID=ES&CategoryID=311',
    method: 'GET'
  };*/

  /*var req = https.request('https://api.mercadolibre.com/categories/MLA97994', function(response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      //console.log('BODY: ' + chunk);
      responseA.writeHead(200, {"Content-Type": "text/html"});
      responseA.write('<code>BODY: ' + chunk + '</code>');
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
}*/

function items(response, url, method){
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<h2>Items API</h2>");
  response.write("<div>url:" + url + "</div>");
  response.write("<div>method:" + method + "</div>");
}

/*function twitter(response, url, method){
  var agent = new HttpsProxyAgent({
      proxyHost: '192.168.5.8',
      proxyPort: 3128
  });
  https.request(
      {
          // like you'd do it usually...
          host: 'twitter.com',
          port: 443,
          method: 'GET',
          path: '/',
   
          // ... just add the special agent:
          agent: agent 
      },
      function(res)
      {
          res.on('data', function(data)
          {
              console.log(data.toString());
          });
      }
  ).end();*/


function redhat(res, url, method){//api de redhat
  var options = {
    headers: {
      accept: '*/*'
    },
    host: 'openshift.redhat.com',
    port: 443,
    path: '/broker/rest/api',
    method: 'GET'
  };

  var req = https.request(options, function(res) {
    console.log(res.statusCode);
    res.on('data', function(d) {
      process.stdout.write(d);
    });
  });
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });
}

function apiml(response, url, method){
  https.globalAgent.options.secureProtocol = 'SSLv3_method'; //para que no me tire error

  var options = {
    headers: {
      accept: '*/*'
    },
    host: 'api.mercadolibre.com',
    port: 443,
    path: '/categories/MLA97994',
    method: 'GET'
  };

  var req = https.request(options, function(res) {
    console.log(res.statusCode);
    res.on('data', function(data) {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write('<code>BODY: ' + data + '</code>');
      response.end();
    });
  });
  req.end();

  req.on('error', function(error) {
    console.error(error);
  });
}

function api(res, url, method){

request('https://api.mercadolibre.com/sites/', {}, function(err, res, body) {
  console.log("Got body: ", body);
});
}

function categories(response, url, method){

}

exports.iniciar = iniciar;
exports.subir = subir;
exports.adoos = adoos;
exports.categories = categories;
exports.apiml = apiml;
exports.items = items;
/*exports.twitter = twitter;*/
exports.redhat = redhat;
exports.api = api;
