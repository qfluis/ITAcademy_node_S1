// Nivel 2 Ejercicio 2
/* Crea una funció que llisti per la consola el contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes. */
const fs = require('fs');
const files = fs.readdir('./', (err, files) =>{
    if (err) console.log('Error', err.message);
    else console.log('Contenido del directorio:', files);
});