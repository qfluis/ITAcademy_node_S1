// Nivel 1 Ejercicio 1
/*
Crea una funció que imprimeixi recursivament un missatge per la 
consola amb demores d'un segon.
*/

const mensajeRepetido = () => {
    setInterval(()=>{
        console.log("Holiwi");
    }, 1000);
}

// Nivel 1 Ejercicio 2
/*
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
*/
const fs = require('fs');

const escribirEnFichero = (texto) => {
    /*
    fs.appendFile('entrega5.txt', (new Date()).toISOString() + " - " + texto+"\n", ( err ) =>{
        if(err){
            console.log( err.message );
            return;
        }
    });*/
    try {
        fs.appendFileSync('entrega5.txt', (new Date()).toISOString() + " - " + texto+"\n" );
    } catch ( err ){
        console.log( err.message );
    }
    
}

// Nivel 1 Ejercicio 3
/*
Crea una altra funció que mostri per consola el contingut 
del fitxer de l'exercici anterior.
*/
const leerFichero = () => {
    fs.readFile('entrega5.txt', 'utf-8',( err, data ) => {
        if(err){
            console.log( err.message );
            return;
        } else {
            console.log(data);
        }
    })
}

// Nivel 2 Ejercicio 1
/* Crea una funció que comprimeixi el fitxer del nivell 1. */
const zlib = require('zlib');


const comprimirFichero = () => {
    const gzip = zlib.createGzip();
    const r = fs.createReadStream('entrega5.txt');
    const w = fs.createWriteStream('entrega5.txt.gz');
    r.pipe(gzip).pipe(w);
}

// Nivel 2 Ejercicio 2
/* Crea una funció que llisti per la consola el contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes. */

// en fichero 1.5-ContenidoDirectorio.js

// Nivel 3 Ejercicio 1
/*
- Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1
- Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algorisme 
aes-192-cbc, i esborri els fitxers inicials
- Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant 
a generar una còpia de l'inicial
- Inclou un README amb instruccions per a l'execució de cada part
*/
const codificarFichero = () => {
    let file;
    try {
        file = fs.readFileSync('entrega5.txt', 'utf-8');
    } catch ( err ){
        console.log( err.message );
        return
    }
    
    try {
        console.log("Esperando");
        let fileHex = fs.writeFileSync('entrega5_hex.txt', file, 'hex');
        let fileBase64 = fs.writeFileSync('entrega5_base64.txt', file, 'base64');
        console.log("holis");
        return {fileHex, fileBase64 }
    } catch ( err ){
        console.log( err.message );
    }       
}





/* PRUEVA CÓDIGO */
// Nivel 1 Ejercicio 1
// mensajeRepetido();

// Nivel 1 Ejercicio 2
escribirEnFichero("hola que tal");

// Nivel 1 Ejercicio 3
leerFichero();

// Nivel 2 Ejercicio 1
comprimirFichero();

// Nivel 2 Ejercicio 2
//TODO: ¿ESTÁ OK?
const cp = require('child_process');
cp.fork('1.5-ContenidoDirectorio.js');

// Nivel 3 Ejercicio 1
console.log(codificarFichero());
