// ==========================================================

// let events = require("events");

// let EventEmitter = events.EventEmitter;

// let ee = new EventEmitter();

// // podemos hacer que este escuche un evento
// // Ej de desarrollo de juego de video
// // Partido de fut que cuando el jugador esté cansado esté escuchando

// ee.once("cansado", function (data) {
//   console.log("El jugador está cansado por primera vez");
// });

// ee.on("cansado", function (data) {
//   console.log("El jugador está cansado. El jugador es el numero" + " " + data);
// });

// ee.on("herido", function (data) {
//   console.log("El jugador está herido. El jugador es el numero" + " " + data);
// });

// // once solo emite la escucha una sola vez

// // luego tenemos que emitir el evento
// // al emitir este evento se ejecuta la escucha y por ende la función que envía el mensaje
// ee.emit("cansado", "10");
// ee.emit("cansado", "10");

// // para dejar de escuchar algun evento
// ee.removeAllListeners("cansado");
// // aquí removemos los que siguieron al remove
// // SI QUEREMOS REMOVER TODOS LOS LISTENERS NO PASAMOS NINGUN PARAMETRO ee.removeAllListeners(), es decir todos los que continuen después de este remove no apareceran
// ee.emit("cansado", "10");
// ee.emit("herido", "10");

// ==========================================================
// •	Crear módulos que van a heredar esta clase
// Aquí lo que hacemos es asignarle a una variable la clase en sí
let EventEmitter = require("events").EventEmitter;
// también importamos modulo nucleo que ya viene instalado con node
// Util lo que hace es heredar la funcionalidad de una clase a otra
let util = require("util");

let Reloj = function () {
  let self = this;
  setInterval(function () {
    self.emit("tick-tock");
  }, 1000);
};

// ahora lo que queremos es que ese Reloj hereda una funcionalidad de EventEmitter
// para eso utilizamos un método del módulo util que se llama inherits

// y le decimos primero la clase que va a heredar la funcionalidad  y luego como segundo parametro la clase del cual vamos a heredar

util.inherits(Reloj, EventEmitter);
// para poder utilizar este archivo tenemos que exportar nuestro módulo
module.exports = Reloj;
