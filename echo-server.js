const http = require('http');

const port = Number(process.env.PORT || 80);

http.createServer(function (request, response) {
    console.log(`processing request: ${request.method} ${request.url}`);
    response.setHeader('content-type', request.headers['content-type']);
    response.setHeader('content-length', request.headers['content-length']);
    request.pipe(response);
}).listen(port);

console.log(`Server running on port ${port}`);