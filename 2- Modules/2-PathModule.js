const path = require("path");

// sep -> separador oficial del path (puede variar entre "/" y "\") 
console.log(path.sep);

// join(str1, str2, str3, ...) -> arma el path uniendo strings que le pasemos
const filePath = path.join("/content", "subFolder", "text.txt");
console.log(filePath)

// basename(path) -> me da la última porción (el archivo al que quiero acceder o la carpeta donde estoy)
const base = path.basename(filePath);
console.log(base);

// resolve(__dirname, string1, string2, ...) -> similar al join, pero transforma la secuencia en un path absoluto
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute)