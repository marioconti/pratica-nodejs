let fs = require("fs");

// HAREMOS DE FORMA SINC Y ASYNC

// Le pasamos la ruta del directorio que queremos leer
// let archivos = fs.readdirSync("src/fsm");

// console.log(archivos);

// Para hacerlo async
// Como es async tiene dos parametros en el caso de que haya algun error al leer
// La callback recibe dos parametro: el error y los archivos que se hayan leído

fs.readdir("src/fsm", function (err, archivos) {
  if (err) {
    throw err;
  } else {
    console.log(archivos);
  }
});

// Aunque fue añadido al final este clg se muestra al principio porque se ejecuta antes que la callback
console.log("Leyendo los archivos del directorio");
