// setTimeout recibe dos parametro
// 1| una fx q se ejecutará pasado el tiempo
// 2| el tiempo en milisegundos que esperará


// setTimeout(function(){
// console.log("Corriendo")
// }, 1000)


// para cancelar simplemente pasamos el id de la fx que queremos limpiar
// para esto agregamos a la fx un id
let sId = setTimeout(function(){
    console.log("Corriendo")
    }, 1000)

clearTimeout(sId);

// esto hará que nada pase porque apenas se ejecuta el timeout se ejecuta el clear y se silencia

// setInterval va a correr varias veces a dif de timeOut que solo lo hace una vez
// funciona de igual manera que timeout

let valor = 0;
// esto irá ejecutando (sumando) cada segundo
let sIdInterval = setInterval(function(){
    valor += 1
    console.log(valor)
    if(valor === 5){
        clearInterval(sIdInterval)
    }
}, 1000)