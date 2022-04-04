// Nivel 1 Ejercicio 1
/* Mostra per la consola el resultat d'una arrow function autoinvocable 
que sumi dos nombres. */

// Para que quede bonito
console.log("########## ENTREGA2 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 1");

const num1 = 5;
const num2 = 8;
console.log(((n1,n2) =>{
    return n1+n2;
})(num1, num2));



/*
const mostrarSuma = (num1, num2)=>{    
    const sumaAutoInvocada = ((n1, n2) => {
        console.log(n1 + n2);
    })(num1, num2);
} // TODO: DUDA ¿Utilidad?
*/

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
class EnteAbstracto {
    constructor(nombre) {
        if(this.constructor == EnteAbstracto) {
            throw Error("Nou, no se puede instanciar esta clase");
        }    
        this.nombre = nombre;    
    } 

    nombre = "";

    saludar() {
        console.log(`Soy ${this.nombre}: Hola desde lo abstracto`);
    }
}

const crearObjeto = (nombre) => {
    /*let obj = {
        nombre: EnteAbstracto.prototype.nombre,
        saludar: EnteAbstracto.prototype.saludar
    }*/
    let obj = Object.create(EnteAbstracto.prototype);
    obj.nombre = nombre || "Desconocido";
    return obj;
}


/* EJECUCIÓN CÓDIGO */
/*
console.log("########## ENTREGA2 ##########");
console.log("##### NIVEL 1 #####");
Ver linea 6 🙂
*/
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
console.log(creaObjeto("Luis"));
console.log("=> Ejercicio 2");
const miPersona = new Persona("Luis");
miPersona.dirNom();
console.log("##### NIVEL 3 #####");
console.log("=> Ejercicio 1");
const objetoAbstracto = crearObjeto("Luis");
const objetoAbstracto2 = crearObjeto("Peter");
const objetoAbstracto3 = crearObjeto();

objetoAbstracto.saludar();
objetoAbstracto2.saludar();
objetoAbstracto3.saludar();

console.log(objetoAbstracto instanceof EnteAbstracto);
console.log(objetoAbstracto2 instanceof EnteAbstracto);
//animal.saludar();







/*
module.exports.mostrarSuma = mostrarSuma;
module.exports.creaObjeto = creaObjeto;
module.exports.Persona = Persona;
module.exports.crearAnimal = crearAnimal;
*/