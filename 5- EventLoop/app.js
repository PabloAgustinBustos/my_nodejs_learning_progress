const {readFile} = require("fs");

console.log("empezó");

readFile(__dirname + "/content.txt", "utf8", (err, res) => {
    if(err){
        console.log(err);
        return;
    }

    console.log(res);
    console.log("complete");
});

console.log("continuing");