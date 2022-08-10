const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    res.end("welcome!");
    console.log("se hizo una request")
});

server.listen(5000);