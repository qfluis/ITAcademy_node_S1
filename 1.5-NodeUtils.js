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
        fs.writeFileSync('entrega5_hex.txt', file, 'hex');
        fs.writeFileSync('entrega5_base64.txt', file, 'base64');        
    } catch ( err ){
        console.log( err.message );
    }       
}

const crypto = require("crypto");


const encriptarDatos = (datos) => {
    
    const algoritmo = 'aes-192-cbc';
    const clave ="holaquetalsoylaclave"

    const key = crypto.scryptSync(clave,'salt',24);
    const iv = crypto.randomFillSync(new Uint8Array(16));
    const cipher = crypto.createCipheriv(algoritmo, key, iv);

    let encrypted = '';
    cipher.setEncoding('hex');

    cipher.on('data', (chunk) => encrypted += chunk);
    //cipher.on('end', () => console.log("RESULTADO:", encrypted));

    cipher.write(datos);
    cipher.end();

    return encrypted;
}

const desencriptarDatos = (datos) => {
    //TODO: https://ciberninjas.com/cifrado-node/
    //crypto.scryptSync()
}

const encriptarFicheros = () => {
    let file_hex;
    let file_base64;
    try {
        file_hex = fs.readFileSync('entrega5_hex.txt', 'hex');
        file_base64 = fs.readFileSync('entrega5_base64.txt', 'base64');
    } catch ( err ){
        console.log( err.message );
        return
    }
    const file_hex_enc = encriptarDatos(file_hex);
    const file_base64_enc = encriptarDatos(file_base64);

    try {
        fs.writeFileSync('entrega5_hex.txt', file_hex_enc, 'hex');
        fs.writeFileSync('entrega5_base64.txt', file_base64_enc, 'base64');        
    } catch ( err ){
        console.log( err.message );
    }     
}

const desencriptarFicheros = () => {

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
/*
const cp = require('child_process');
cp.fork('1.5-ContenidoDirectorio.js');
*/
// Nivel 3 Ejercicio 1
codificarFichero();

encriptarFicheros();
