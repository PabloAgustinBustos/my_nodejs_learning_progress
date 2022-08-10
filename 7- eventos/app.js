const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
    console.log("data recieved");
});

customEmitter.on("probando", () => {
    console.log("hola estoy testeando");
});

// este se ejecuta luego del de arriba (tienen mismo evento)
customEmitter.on("probando", () => {
    console.log("otra lógica");
});

customEmitter.emit("response");
customEmitter.emit("probando");

// pasando argumentos
customEmitter.on("saludo", (nombre, edad) => {
    console.log("soy " + nombre + " y tengo " + edad + " años");
});

customEmitter.emit("saludo", "pablo", 21);