let fs = require("fs");

// el método access nos da acceso al directorio si es que este existe

fs.access("src/fsm/nivel_1", function (err) {
  if (err) {
    // Para crear directorio
    // Reciber 3 parametros
    // 1 nombre del directorio (incluido el path donde queremos que sea creada)
    // 2 callback con error si se presenta
    // Si la carpeta ya existe saltará un error
    fs.mkdir("src/fsm/nivel_1", function (err) {
      if (err) {
        throw err;
      } else {
        console.log("La carpeta fue creada con éxito");
      }
    });
  } else {
    console.log("La carpeta ya existe");
  }
});

fs.access("src/fsm/nivel_2", function (err) {
  if (err) {
    fs.mkdir("src/fsm/nivel_2", function (err) {
      if (err) {
        throw err;
      } else {
        console.log("La carpeta fue creada con éxito");
      }
    });
  } else {
    console.log("La carpeta ya existe");
  }
});

fs.access("src/fsm/nivel_3", function (err) {
  if (err) {
    fs.mkdir("src/fsm/nivel_3", function (err) {
      if (err) {
        throw err;
      } else {
        console.log("La carpeta fue creada con éxito");
      }
    });
  } else {
    console.log("La carpeta ya existe");
  }
});
