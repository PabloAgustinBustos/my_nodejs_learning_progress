// 1° opción: importar fs como promesa así 
// const {writeFile, readFile} = require("fs").promises;

// 2° opción: importar util y usar promisify()
const {writeFile, readFile} = require("fs");
const util = require("util");

// util.promisify() convierte una función asíncrona de callbacks a una promesa
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

(async() => {
    try{
        const txt = await readFilePromise(__dirname + "/text.txt");

        console.log(txt);
    }catch(error){
        console.log(error);
    }
})()