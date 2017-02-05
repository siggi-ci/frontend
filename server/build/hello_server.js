"use strict";
const http = require("http");
const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('{"message":"hello world"}');
});
const port = 8000;
server.listen(port);
console.log('Listening on http://localhost:' + port);
