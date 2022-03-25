// Nivel 1 Ejercicio 1
/* Crea una funció que mostri per consola el nom d'usuari al invocar-la 
passant-li el nom com a paràmetre. */

const mostrarNombre = (nombre) => {
    console.log(`Hola ${nombre} buenos días`);
}

// Nivel 2 Ejercicio 1
const mostrarNombreYApellidos = (nombre, apellido1, apellido2) => {
    console.log(`Hola ${nombre} ${apellido1} ${apellido2} saludos :-)`);
}

// Nivel 2 Ejercicio 2
const mostrarSuma = (num1, num2) => {
    console.log(`La suma de ${num1} y ${num2} es ${sumar(num1,num2)}`);
}

const sumar = (num1, num2) => {
    return num1 + num2;
}
// Nivel 3 Ejercicio 1
// función que cuenta de num1 a num2 y muestra resultado por consola
const contar = (num1, num2) => {
    if(num1 > num2) {
        let numtmp = num2;
        num2 = num1;
        num1 = numtmp;
    }

    let resultado = "";
    for (let i = num1; i <= num2; i++){
        resultado += i;
    }
    console.log(resultado);
}
// array de Funciones, se podía haber hecho a mano
const arrayFunciones = [];
for (let i=0; i<= 9; i++){
    arrayFunciones.push(contar);
}

const mostrarCuentas = ()=> {
    for (funcion of arrayFunciones) {
        funcion(0,9);
    }
}

// Nivel 3 Ejercicio 2
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
console.log("##### NIVEL 2 #####");
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