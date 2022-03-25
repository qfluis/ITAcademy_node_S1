// Nivel 1 Ejercicio 1
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de 
si la Promise es resol o no. */
const miPromesa = (estado)=>{
    return new Promise((resolve, reject)=>{
        if(estado){
            resolve("Bieeeeeen");
        } else {
            reject("Buuuuuu");
        }
    })
}

const probarPromesa = ()=>{
    const promesa1 = miPromesa(true);
    const promesa2 = miPromesa(false);

    const exito = result => console.log('N1E1 > Exito',result);
    const fracaso = result => console.log('N1E1 > Fracaso',result);

    promesa1    
        .then(exito)
        .catch(fracaso);

    promesa2    
        .then(exito)
        .catch(fracaso);
}

// Nivel 1 Ejercicio 2
/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció 
un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */
const imprimirBonito = texto => console.log(`N1E2 > --%% ${texto} %%--`);
const textoAImprimir = (parametro, funcion)=>{
    funcion(parametro);
}
// Nivel 2 Ejercicio 1
/*
Donats els objectes employees i salaries, crea una arrow function getEmployee 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. */
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
},{
    id: 4,
    name: 'Bender'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const empleadoResult = employees.find( item => item.id == id);
        //const salaryResult = salaries.find( item => item.id == id);

        if(empleadoResult){
            resolve(empleadoResult);
        } else {
            reject(new Error("Empleado no encontrado"));
        }
    })
}

// Nivel 2 Ejercicio 2
/* Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte 
employee i retorni el seu salari. */
const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salaryResult = salaries.find( item => item.id == employee.id);

        if( salaryResult ){
            resolve( { id: employee.id , name: employee.name, salary: salaryResult.salary } );            
        } else {
            reject(new Error("Salario no encontrado"));
        }
    })
}
// Nivel 2 Ejercicio 3 + Nivel 3 Ejercicio 1
/* Invoca la primera funció getEmployee() i després getSalary() 
niant l'execució de les dues promises.*/
/* Fixa un element catch a la invocació del nivell anterior que capturi qualsevol 
error i el mostri per la consola. */

const getEmployeeAndSalary = (id) => {
    getEmployee(id)
        .then(getSalary)
        .then( res => console.log("N2E2",res))
        .catch( err => console.log("N3E1",err.message));
}


/* PRUEBA DE CÓDIGO */


// NIVEL 1
// Ejercicio 1
probarPromesa();
// Ejercicio 2
textoAImprimir("Holiwi", imprimirBonito);

// NIVEL 2
// Ejercicio 1
getEmployee(2)
    .then(res => console.log("N2E1", res))
    .catch(err => console.log("N2E1", err.message));

getEmployee(5)
    .then(res => console.log("N2E1", res))
    .catch(err => console.log("N2E1", err.message));


// Ejercicio 2
const emp1 = {
    id: 2,
    name: 'Bill Gates'
}
const emp2 = {
    id: 6,
    name: 'Homer'
}

getSalary(emp1)
    .then( res => console.log("N2E2",res))
    .catch(err => console.log("N2E2", err.message));
getSalary(emp2)
    .then( res => console.log("N2E2", res))
    .catch(err => console.log("N2E2", err.message));

// Ejercicio 3 + Nivel 3 Ejercicio 1

getEmployeeAndSalary(1);
getEmployeeAndSalary(3);
getEmployeeAndSalary(8);
getEmployeeAndSalary(4);

/*
module.exports.probarPromesa = probarPromesa;
module.exports.imprimirBonito = imprimirBonito;
module.exports.textoAImprimir = textoAImprimir;
module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;
module.exports.getEmployeeAndSalary = getEmployeeAndSalary;
*/