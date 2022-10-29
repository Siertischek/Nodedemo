const http = require("http");

http.createServer(function(request, response)
{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h2>Samuel Ertischek - h18n215</h2> \ <p>Running node server on port 3039</p>")
    response.end();
}).listen(3039);