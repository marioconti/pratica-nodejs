let fs = require("fs");

// Recibe tres parametros
// 1 ruta del archivo que queremos renombrar o mover
// 2 nuevo nombre o posición donde lo quiero dejar
// 3 una callback que va a permitir ver si hay algún err

// esto tmb podemos hacerlo con directorios
fs.rename("src/fs", "src/fsm", function(err){
    if(err){
        throw err
    }else(
        console.log("El archivo ha sido renombrado")
    )
})