/*
const entrega1 = require("./1.1-FunctionsAndTemplateLiterals");
const entrega2 = require("./1.2-ClassesAndArrowFunctions");
const { Persona } = require("./1.2-ClassesAndArrowFunctions");
const entrega3 = require("./1.3-PromisesAndCallbacks");
*/

// TODO: HACER SWITCH, para elegir entrega / ejercicios ¿?


/*


console.log("########## ENTREGA1 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 1");
entrega1.mostrarNombre("Luis");
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
entrega1.mostrarNombreYApellidos("Luis", "Quevedo", "Ferreiros");
console.log("=> Ejercicio 2");
entrega1.mostrarSuma(5, 3);
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
entrega1.mostrarCuentas();
console.log("=> Ejercicio 2");
entrega1.mostrarNombreAutoinvocada("UsuarioAutoInvocado");



console.log("########## ENTREGA2 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 1");
entrega2.mostrarSuma(6,10);
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1");
console.log(entrega2.creaObjeto("Luis"));
console.log("=> Ejercicio 2");
//const Persona = entrega2.Persona;
const miPersona = new Persona("Luis");
miPersona.dirNom();
console.log("##### NIVEL 3 #####");
console.log("=> Ejercicio 1");
const animal1 = entrega2.crearAnimal("Gato", "Gardfield");
const animal2 = entrega2.crearAnimal("Perro", "Laica");
animal1.saludar();
animal2.saludar();

*/


/*
console.log("########## ENTREGA3 ##########");
console.log("##### NIVEL 1 #####");
console.log("=> Ejercicio 2");
entrega3.textoAImprimir("Holiwi", entrega3.imprimirBonito);
console.log("=> Ejercicio 1");
entrega3.probarPromesa();
*/

/*
console.log("##### NIVEL 2 #####");
console.log("=> Ejercicio 1 & 2");
entrega3.getEmployee(2)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

entrega3.getEmployee(5)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

const emp1 = {
    id: 2,
    name: 'Bill Gates'
}
const emp2 = {
    id: 6,
    name: 'Homer'
}

entrega3.getSalary(emp1)
    .then( res => console.log(res))
    .catch(err => console.log(err.message));
entrega3.getSalary(emp2)
    .then( res => console.log(res))
    .catch(err => console.log(err.message));
*/


/*
console.log("=> Ejercicio 3 + Nivel 3 Ejercicio 1");
entrega3.getEmployeeAndSalary(1);
entrega3.getEmployeeAndSalary(3);
entrega3.getEmployeeAndSalary(8);
entrega3.getEmployeeAndSalary(4);
*/ 


const datos = [
    {id:1, title: 'Iron Man', year: 2008},
    {id:2, title: 'Spiderman', year: 2017},
    {id:3, title: 'Avengers', year: 2019}
]

const getDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(datos);
        }, 1500);
    })    
}

const fetchingData = async () => {
    try {
        const datosFetched = await getDatos();
        console.log(datos);
    } catch ( err ) {
        console.log( err );
    }
    
}
fetchingData();


//getDatos()
//    .then( datos => console.log(datos) );