let fs = require("fs");

let text = "Aprende node.js fácilmente";

// llamamos al metodo que que nos va a permitir llamar al metodo. Este 3 parametros:
// 1 nombre del archivo
// 2 el texto que vamos a escribir o lo que vamos a escribir dentro del archivo
// 3 una callback que va a ser llamada cuando el texto termine de ser escrito
// a esta fx podemos pasarle una prop, ej. un error

fs.writeFile("src/fsm/archivo", text, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("El archivo fue creado");
  }
});

// Para agregar contenido a un archivo
let nuevoTexto = "\nCurso de Jonathan Cifuentes";

// Como primer parametros hacemos un llamado al archivo
// El segundo parametro es el texto que queremos añadir
// Tercer parametro es un catch de err
fs.appendFile("src/fsm/archivo", nuevoTexto, function (err) {
  if (err) {
    throw err;
  } else {
    console.log("El nuevo texto ha sido añadido al archivo");
  }
});
