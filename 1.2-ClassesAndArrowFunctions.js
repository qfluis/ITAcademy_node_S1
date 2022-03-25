// Nivel 1 Ejercicio 1
/* Mostra per la consola el resultat d'una arrow function autoinvocable 
que sumi dos nombres. */
const mostrarSuma = (num1, num2)=>{    
    const sumaAutoInvocada = ((n1, n2) => {
        console.log(n1 + n2);
    })(num1, num2);
} // TODO: DUDA ¿Utilidad?

// Nivel 2 Ejercicio 1
/* Crea una arrow function que, rebent un paràmetre, retorni un objecte 
amb un atribut que tingui com a valor el paràmetre rebut. */

const creaObjeto = (nom) => {
    return {nom};
}

// Nivel 2 Ejercicio 2
/* Crea una classe Persona que rebi un paràmetre 'nom' al ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe. */

class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        console.log(`El meu nom es: ${this.nom}`);    
    }
}

// Nivel 3 Ejercicio 1
/* Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions. */

// TODO: DUDA:¿¿En principio una clase abstracta no se debería instanciar??
class Animal {
    constructor(tipo, nombre) {
        this.tipo = tipo;
        this.nombre = nombre;        
    } 

    saludar() {
        console.log(`Hola me llamo ${this.nombre} y soy del tipo ${this.tipo}`);
    }
}

const crearAnimal = (tipo, nombre) => {
    return new Animal(tipo, nombre);
}


/* EJECUCIÓN CÓDIGO */

console.log("########## ENTREGA2 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 1");
mostrarSuma(6,10);
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
console.log(creaObjeto("Luis"));
console.log("=> Ejercicio 2");
const miPersona = new Persona("Luis");
miPersona.dirNom();
console.log("##### NIVEL 3 #####");
console.log("=> Ejercicio 1");
const animal1 = crearAnimal("Gato", "Gardfield");
const animal2 = crearAnimal("Perro", "Laica");
animal1.saludar();
animal2.saludar();







/*
module.exports.mostrarSuma = mostrarSuma;
module.exports.creaObjeto = creaObjeto;
module.exports.Persona = Persona;
module.exports.crearAnimal = crearAnimal;
*/