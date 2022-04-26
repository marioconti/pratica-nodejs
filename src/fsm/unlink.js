let fs = require("fs");

// Unlink es el metodo de node para borrar archivos
// Recibe 2 parametros
// 1 la ubicación del archivo
// 2 una callabck, porque usamos el metodo async, para saber si sucedió algún error

// si corremos este archivo en node se borrará el test.txt
fs.unlink("src/fsm/test.txt", function(err){
    if(err){
        throw err
    } else {
        console.log("El archivo ha sido borrado")
    }
})