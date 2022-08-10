const {readFile} = require("fs");

const getText = path => {
    return new Promise((res, rej) => {
        readFile(path, "utf8", (error, data) => {
            if(error){
                rej(error);
            }else{
                res(data);
            }
        });
    });
}

getText(__dirname + "/text.txt")
.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})