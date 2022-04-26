let fs = require("fs");

// Recibe 3 parametros
// 1 path
// 2 codificación
// 3 callback, con dos parametros (err, contenido del archivo una vez se haya leído)

fs.readFile("src/fsm/test.txt", "utf-8", function (err, content) {
  if (err) {
    throw err;
  } else {
    console.log(content);
  }
});
