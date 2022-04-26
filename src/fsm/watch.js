let fs = require("fs");

// PARA LEER sincronicamente un archivo (desde la consola)
// recibe dos parametros readFileSync
// 1 ruta
// 2 codificación UTF-8
let config = JSON.parse(fs.readFileSync("src/fsm/config.json", "UTF-8"));
console.log(config);

// PARA VER
// 1 primer parametro es el archivo
// 2 una callback que recibe 2 parametros: actual y anterior.
// Estos dos objetos (act y ant) son dos objetos de un módulo que se llama estadística y otorgaran estadísticas sobre el archivo (fecha, cambio, etc)

// ¿Que sucede aquí?
// Esta función está constantemente viendo el archivo que nosotros le pasemos como primer parametro, algo ocurrir un cambio se ejecutará la callback

fs.watchFile("src/fsm/config.json", function (actual, anterior) {
  console.log("El archivo cambió");
  //   vamos a leer nuevamente el archivo y vamos a mostrar nuevamente el archivo en pantalla
  config = JSON.parse(fs.readFileSync("src/fsm/config.json", "UTF-8"));
  console.log(config);
});
