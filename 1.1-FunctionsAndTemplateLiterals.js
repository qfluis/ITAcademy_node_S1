// Nivel 1 Ejercicio 1
/* Crea una funció que mostri per consola el nom d'usuari al invocar-la 
passant-li el nom com a paràmetre. */

const mostrarNombre = (nombre) => {
    console.log(`Hola ${nombre} buenos días`);
}

// Nivel 2 Ejercicio 1
/* Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, 
guardant-los en variables i referenciant-les en la impressió del missatge. */
const mostrarNombreYApellidos = (nombre, apellido1, apellido2) => {
    console.log(`Hola ${nombre} ${apellido1} ${apellido2} saludos :-)`);
}

// Nivel 2 Ejercicio 2
/* Invoca una funció que retorni un valor des de dins d'una template literal. */
const mostrarSuma = (num1, num2) => {
    console.log(`La suma de ${num1} y ${num2} es ${sumar(num1,num2)}`);
}

const sumar = (num1, num2) => {
    return num1 + num2;
}
// Nivel 3 Ejercicio 1
/* Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti 
del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. 
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
*/
// función que cuenta de 0 a 9 y muestra los números por consola
const contar = () => {  
    for (let i = 0; i <= 9; i++){
        console.log(i);
    }
}
// array de Funciones, se podía haber hecho a mano
const arrayFunciones = [];
for (let i=0; i<= 9; i++){
    arrayFunciones.push(contar);
}

const mostrarCuentas = ()=> {
    for (funcion of arrayFunciones) {
        funcion();
    }
}

// Nivel 3 Ejercicio 2
/* Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom 
de l'usuari rebut com a paràmetre. */
const mostrarNombreAutoinvocada = (nombre) => {

    const miFuncionAutoinvocada = ((nom)=> {
        console.log(nom);
    })(nombre);   
    
    // ¿Utilidad? 
}


/* EJECUCIÓN CÓDIGO */

console.log("########## ENTREGA1 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 1");
mostrarNombre("Luis");
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
mostrarNombreYApellidos("Luis", "Quevedo", "Ferreiros");
console.log("=> Ejercicio 2");
mostrarSuma(5, 3);
console.log("##### NIVEL 3 #####");
console.log("=> Ejercicio 1");
mostrarCuentas();
console.log("=> Ejercicio 2");
mostrarNombreAutoinvocada("UsuarioAutoInvocado");










/*
module.exports.mostrarNombre = mostrarNombre;
module.exports.mostrarNombreYApellidos = mostrarNombreYApellidos;
module.exports.mostrarSuma = mostrarSuma;
module.exports.mostrarCuentas = mostrarCuentas;
module.exports.mostrarNombreAutoinvocada = mostrarNombreAutoinvocada;
*/