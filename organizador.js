let fs = require("fs");

fs.access("src/fsm/nivel_1", function (err) {
  if (err) {
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

fs.access("temp", function (err) {
  if (err) {
    console.log("No se encontró ningún directorio con este path");
  } else {
    fs.readdir("temp", function (err, archivos) {
      if (err) {
        throw err;
      } else {
        for (let i = 0; i <= archivos.length; i++) {
          if (
            archivos[i] === `archivo${1}_1.txt` ||
            archivos[i] === `archivo${2}_1.txt` ||
            archivos[i] === `archivo${3}_1.txt`
          ) {
            fs.rename(
              `temp/${archivos[i]}`,
              `src/fsm/nivel_1/${archivos[i]}`,
              function (err) {
                if (err) {
                  throw err;
                } else console.log("El archivo ha sido reubicado");
              }
            );
          } else if (
            archivos[i] === `archivo${1}_2.txt` ||
            archivos[i] === `archivo${2}_2.txt` ||
            archivos[i] === `archivo${3}_2.txt`
          ) {
            fs.rename(
              `temp/${archivos[i]}`,
              `src/fsm/nivel_2/${archivos[i]}`,
              function (err) {
                if (err) {
                  throw err;
                } else console.log("El archivo ha sido reubicado");
              }
            );
          } else if (
            archivos[i] === `archivo${1}_3.txt` ||
            archivos[i] === `archivo${2}_3.txt` ||
            archivos[i] === `archivo${3}_3.txt`
          ) {
            fs.rename(
              `temp/${archivos[i]}`,
              `src/fsm/nivel_3/${archivos[i]}`,
              function (err) {
                if (err) {
                  throw err;
                } else console.log("El archivo ha sido reubicado");
              }
            );
          } else {
            console.log("No hay archivos para mover");
          }
        }
      }
    });

    fs.rmdir("temp", function (err) {
      if (err) {
        throw err;
      } else {
        console.log("El directorio ha sido borrado");
      }
    });
  }
});
