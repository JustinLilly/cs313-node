var http = require('http');

function onRequest(req, res){
    if(req.url == "/home"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html><body><h1>Welcome to Home Page</h1></body></html>");
    } else if(req.url == "/getData"){
        res.writeHead(200, {"Content-Type": "application/json"});
        var jason = {"name":"Justin Lilly","class":"cs313"};
        res.write(JSON.stringify(jason));
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<html><body><h1>Page Not Found</h1></body></html>");
    }

    console.log("received a request for: " + req.url);
    res.end();
}
var port = 8888;
var server = http.createServer(onRequest);  
server.listen(port);

console.log("The server is listening on port: " + port);