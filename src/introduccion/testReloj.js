let Reloj = require("./eventEmitter.js");

let segundos = 0;

let reloj = new Reloj();

// con este on decimos que evento queremos escuchar (en este caso tick-tock)
// y cuando suceda ese evento haremos que se llame una función
reloj.on("tick-tock", function () {
  segundos += 1;
  if (segundos === 5) {
    process.exit();
  }
  console.log(segundos);
});

reloj.once("tick-tock", function () {
  console.log("Primer tick-tock");
});
