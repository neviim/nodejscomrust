const { say } = require('../pkg/pong_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(say(queryObject['name']));
});

console.log()
console.log(`Servidor ativado: ${hostname}:${port}`)
server.listen(port, hostname, () => {});