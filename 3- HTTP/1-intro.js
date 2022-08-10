const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome");
    }
    
    console.log(req.url);

    if(res.url === "/about"){
        res.end("I'm in /about route");
    }

    res.end("<h1>oops</h1>");
});

server.listen(5000);