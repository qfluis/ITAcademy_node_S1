// Nivel 1 Ejercicio 1 ###################################################################################
//Crea una funció que imprimeixi recursivament un missatge per la 
//consola amb demores d'un segon.


const mensajeRepetido = () => {
    setInterval(()=>{
        console.log("Holiwi");
    }, 1000);
}

//mensajeRepetido(); // TODO: quitar comentario

// Nivel 1 Ejercicio 2 ###################################################################################
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

const fs = require('fs');

// función necesaria para crear la estructura de carpetas en las que se basan los
// demás ejercicios
const crearEstructuraCarpetas = () => {
    const arrCarpetas = ['./files', './files/0-original', './files/1-codified', './files/2-encrypted', './files/3-decrypted']
    
    for (carpeta of arrCarpetas) {
        try {
            fs.mkdirSync(carpeta);
        } catch {}
    }  
}

const escribirEnFichero = (texto) => {
    
    try {        
        fs.writeFileSync('./files/0-original/entrega5.txt', (new Date()).toISOString() + " - " + texto+"\n" );
        //fs.appendFileSync('./files/0-original/entrega5.txt', (new Date()).toISOString() + " - " + texto+"\n" );
    } catch ( err ){
        console.log( err.message );
    }    
}

crearEstructuraCarpetas();
escribirEnFichero("hola que tal");

// Nivel 1 Ejercicio 3 ###################################################################################

// Crea una altra funció que mostri per consola el contingut 
// del fitxer de l'exercici anterior.

const leerFichero = () => {
    /*
    fs.readFile('./files/0-original/entrega5.txt', 'utf8',( err, data ) => {
        if(err){
            console.log( err.message );
        } else {
            console.log('Contenido del fichero:')
            console.log(data);
        }
    })*/
    let fichero;
    try {
        fichero = fs.readFileSync('./files/0-original/entrega5.txt','utf8');
        console.log('Contenido del fichero:')
        console.log(fichero);
    } catch ( err ) {
        console.log( err.message );
    }
    
}

leerFichero();

// Nivel 2 Ejercicio 1 ###################################################################################
/* Crea una funció que comprimeixi el fitxer del nivell 1. */
const zlib = require('zlib');


const comprimirFichero = () => {
    const gzip = zlib.createGzip();
    const r = fs.createReadStream('./files/0-original/entrega5.txt');
    const w = fs.createWriteStream('./files/0-original/entrega5.txt.gz');
    r.pipe(gzip).pipe(w);
}

comprimirFichero();

// Nivel 2 Ejercicio 2 ###################################################################################
/* Crea una funció que llisti per la consola el contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes. */

// en fichero 1.5-ContenidoDirectorio.js
//TODO: ¿ESTÁ OK?

// TODO: QUITAR COMENTARIO
//const cp = require('child_process');
//cp.fork('1.5-ContenidoDirectorio.js');




// Nivel 3 Ejercicio 1 ###################################################################################
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
    let fileContent;
    try {
        fileContent = fs.readFileSync('./files/0-original/entrega5.txt', 'utf8');
    } catch ( err ){
        console.log( err.message );
        return
    }    

    const buffer = Buffer.from(fileContent,"utf8");
    let fileContentCodifiedHex = buffer.toString('hex');
    let fileContentCodifiedBase64 = buffer.toString('base64');

    //console.log(fileContentCodifiedBase64, fileContentCodifiedBase64);

    try {
        fs.writeFileSync('./files/1-codified/entrega5_hex.txt', fileContentCodifiedHex); // , 'hex' // TODO: DUDA: si añado la codificación al archivo el contenido se ve normal...
        fs.writeFileSync('./files/1-codified/entrega5_base64.txt', fileContentCodifiedBase64);  // , 'base64'         
    } catch ( err ){
        console.log( err.message );
    }       
}
/* Esta función no pertenece a ninguna práctica (fines educativos 🤓)
const decodificarFichero = () => {
    let file, file2;
    try {
        file_hex = fs.readFileSync('./files/1-codified/entrega5_hex.txt','hex');
        file_base64 = fs.readFileSync('./files/1-codified/entrega5_base64.txt','base64');
    } catch ( err ){
        console.log( err.message );
        return
    }    

    const bufferHex = Buffer.from(file_hex,'hex');
    const bufferBase64 = Buffer.from(file_base64, 'base64');
    const fileUtf8FromHex = bufferHex.toString('utf8');
    const fileUtf8FromBase64 = bufferBase64.toString('utf8')

    console.log('hex',fileUtf8FromHex);
    console.log('base64',fileUtf8FromBase64);
}*/

const crypto = require("crypto");
const clave ="holaquetalsoylaclave";                    // ¿? clave privada
const salt = "UnPocoDeSalt";                            // Salt
const algoritmo = 'aes-192-cbc';                        // algoritmo
const IV = crypto.randomFillSync(new Uint8Array(16));   //"5183666c72eec9e4"; //   // initialitation vector


// https://gist.github.com/siwalikm/8311cf0a287b98ef67c73c1b03b47154

const encriptarDatos = (datos, encoding) => {    
    const key = crypto.scryptSync(clave, salt, 24);
    const cipher = crypto.createCipheriv(algoritmo, key, IV);
    let encrypted = cipher.update(datos,encoding,encoding);
    encrypted += cipher.final(encoding);
    return encrypted;
}

const desencriptarDatos = (datos, encoding) => {
    const nkey = crypto.scryptSync(clave, salt, 24);
    const decipher = crypto.createDecipheriv(algoritmo, nkey, IV);
    let decrypted = decipher.update(datos, encoding, encoding);
    return (decrypted + decipher.final(encoding));
}

const encriptarFicheros = () => {
    let file_hex;
    let file_base64;   
    try {
        file_hex = fs.readFileSync('./files/1-codified/entrega5_hex.txt', 'hex');
        file_base64 = fs.readFileSync('./files/1-codified/entrega5_base64.txt', 'base64');
    } catch ( err ){
        console.log( err.message );
        return
    }
    const file_hex_enc = encriptarDatos(file_hex, 'hex');
    const file_base64_enc = encriptarDatos(file_base64, 'base64');
    
    try {
        fs.writeFileSync('./files/2-encrypted/entrega5_hex.txt', file_hex_enc, 'hex');
        fs.writeFileSync('./files/2-encrypted/entrega5_base64.txt', file_base64_enc, 'base64');              
    } catch ( err ){
        console.log( err.message );
    }     
}

const desencriptarFicheros = () => {
    let file_hex;
    let file_base64;    
    try {
        file_hex = fs.readFileSync('./files/2-encrypted/entrega5_hex.txt', 'hex');
        file_base64 = fs.readFileSync('./files/2-encrypted/entrega5_base64.txt', 'base64');       
    } catch ( err ){
        console.log( err.message );
        return
    }
   
    const file_hex_desenc = desencriptarDatos(file_hex, 'hex');
    const file_base64_desenc = desencriptarDatos(file_base64, 'base64');

    try {
        fs.writeFileSync('./files/3-decrypted/entrega5_hex_des.txt', file_hex_desenc, 'hex');
        fs.writeFileSync('./files/3-decrypted/entrega5_base64_des.txt', file_base64_desenc, 'base64');   
    } catch ( err ){
        console.log( err.message );
    } 
}

crearEstructuraCarpetas();  //no sería necesario si se ha ejecutado previamente (N1E2)
codificarFichero();

encriptarFicheros();

desencriptarFicheros();

