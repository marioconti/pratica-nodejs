// console.log(process.argv);

// function leerOpción(opc) {
//   let index = process.argv.indexOf(opc);
//   if (index === -1) {
//     return false;
//   } else {
//     return process.argv[index + 1];
//   }
// }

// let nombre = leerOpción("-nombre");

// console.log(`El nombre es: "${nombre}"`);

// process.stdout.write("cual es el apellido: \n")

// process.stdin.on("data", function(data){
//     process.stdout.write(`El nombre completo es ${nombre} ${data} \n`)
//     process.exit()
// })

// MENSAJE QUE QUEREMOS ESCRIBIRLE AL USUARIO
process.stdout.write(
  "Escriba una lista de numeros para sumar. '.' para terminar : \n"
);

let suma = 0;

process.stdin.on("data", function (data) {
  // usamos estos metodos para que solo reciba numeros y trim para quitar espacios porque eso serpa un objeto
  // Esto busca que: si lo que el usuario escribio es un . terminemos el proceso
  if (data.toString().trim() === ".") {
    process.exit();
  } else {
    //   usamos parseInt() porque vamos a recibir una cadena de caracteres
    suma += parseInt(data.toString().trim());
  }
});

// cuando se acabe el processo se va a correr un evento que vamos a estar escuchando
process.on("exit", function () {
  process.stdout.write("La suma total es" + " " + suma );
});
