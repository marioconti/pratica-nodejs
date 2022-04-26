let fs = require("fs");

let total = "";

// Le pasamos la ruta del archivo grande que queremos pasarle
let stream = fs.createReadStream("src/fsm/grande.txt");

// Luego ponemos un listener
// Lo que esto hará es que cuando el evento data se ejecute, nosotros vamos a escuchar ese evento
// Luego ejecutaremos una función que recibira un segmento de info que estamos recibiendo
// Nosotros luego dentro de la función podemos hacer lo que queramos con esa información
stream.on("data", function (segmento) {
  console.log(segmento.length);

  // Esto lo hacemos para concatenar los segmentos
  total += segmento;
});

// El siguiente evento que queremos escuchar es el evento end que va ser ejecutado cuando se acaben los segmentos que tenemos en el archivo

stream.on("end", function () {
  console.log(`El tamaño total del archivo es: ${total.length}`);
});
