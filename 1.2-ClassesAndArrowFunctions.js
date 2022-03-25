// Nivel 1 Ejercicio 1
const mostrarSuma = (num1, num2)=>{
    
    const sumaAutoInvocada = ((n1, n2) => {
        console.log(n1 + n2);
    })(num1, num2);
} // ¿Utilidad?

// Nivel 2 Ejercicio 1

const creaObjeto = (nom) => {
    return {nom};
}

// Nivel 2 Ejercicio 2

class Persona {
    constructor(nom){
        this.nom = nom;
    }

    dirNom(){
        console.log(`El meu nom es: ${this.nom}`);    
    }
}

// Nivel 3 Ejercicio 1

// ¿¿En principio una clase abstracta no se debería instanciar??
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












module.exports.mostrarSuma = mostrarSuma;
module.exports.creaObjeto = creaObjeto;
module.exports.Persona = Persona;
module.exports.crearAnimal = crearAnimal;