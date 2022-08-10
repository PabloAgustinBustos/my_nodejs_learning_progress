const {readFile, writeFile} = require("fs");
const path = require("path");

console.log("start");

readFile(path.join(__dirname, "content", "first.txt"), "utf8", (err, res) => {
    if(err){
        console.log(err)
        return;
    }

    // obtenemos
    console.log(res);

    const first = res;

    readFile(path.join(__dirname, "content", "second.txt"), "utf8", (err, res) => {
        if(err){
            console.log(err)
            return;
        }

        const second = res;

        writeFile(
            path.join(__dirname, "content", "resultAsync.txt"), 
            `result: ${first}, ${second}`,
            (err, res) => {
                if(err){
                    console.log(err);
                    return;
                }

                console.log("done with this task");
            }
        );
    });
});

console.log("starting the next one");