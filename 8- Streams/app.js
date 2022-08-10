const {createReadStream} = require("fs");

const stream = createReadStream(__dirname + "/text.txt", {highWaterMark: 100000, encoding: "utf-8"});

// al dispararse la lectura, lee todo el archivo por chunks (por defecto el chunk es 65kb)
stream.on("data", chunk => {
    console.log(chunk);
});