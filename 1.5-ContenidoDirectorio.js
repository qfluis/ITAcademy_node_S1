// Nivel 2 Ejercicio 2
/* Crea una funció que llisti per la consola el contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes. */

// Sólo funciona en windows 
// además el fichero tiene que estar dentro de la carpeta de usuario (en cualquier nivel)
// No he encontrado una manera mejor de hacerlo (supongo que la hay...)
const arrDireccion = __dirname.split('\\');
urlUser = `${arrDireccion[0]}/${arrDireccion[1]}/${arrDireccion[2]}/`;
console.log('Directorio usuario:',urlUser);

const fs = require('fs');
const files = fs.readdir(urlUser, (err, files) =>{
    if (err) console.log('Error', err.message);
    else console.log('Contenido del directorio:', files);
});