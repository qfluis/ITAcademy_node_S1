//Nivel 1 Ejercicio 1
/* Donats els objectes employees i salaries, crea una arrow function getEmployee 
que retorni una Promise efectuant la cerca en l'objecte pel seu id. 
Crea una altra arrow function getSalary que rebi com a paràmetre un objecte 
employee i retorni el seu salari.*/

let employees = [
    {id: 1, name: 'Linux Torvalds'},
    {id: 2, name: 'Bill Gates'},
    {id: 3, name: 'Jeff Bezos'},
    {id: 4, name: 'Bender'}
];
 
let salaries = [
    {id: 1, salary: 4000},
    {id: 2, salary: 1000},
    {id: 3, salary: 2000}
];

getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const result = employees.find( employee => employee.id == id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Empleado no encontrado'));
        }
    });
}

getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const result = salaries.find( salary => salary.id == employee.id);
        if(result){
            resolve(result);
        } else {
            reject(new Error('Salario no encontrado'));
        }
    });
}

//Nivel 1 Ejercicio 2
/* Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla 
el nom de l'empleat i el seu salari, usant les funcions que has definit a l'exercici anterior. */
// TODO: DUDA, ¿si hay error se salta el resto del código?
getEmployeeAndSalary = async (id) => {
    try {
        const employee = await getEmployee(id);
        const salary = await getSalary(employee);
        console.log(`Empleado: ${employee.name} Salario: ${salary.salary}`);
    } catch ( err ) {
        console.log( err.message );
    }
}


//Nivel 2 Ejercicio 1
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï 
la seva funció resolve() després de 2 segons de la seva invocació. */

const esperaXSegundos = (segundos) =>{
    return new Promise((resolve, reject) => {
        if(!isNaN(segundos)) {
            setTimeout(() => resolve() , segundos*1000);
        } else {
            reject(new Error("Error. Se esperaba un número"));
        }        
    });
}

const esperar = async (segundos) => {
    
    try {
        console.log("N2E1 > Espera iniciada ...")
        await esperaXSegundos(segundos);
        console.log("N2E1 > Espera finalizada");
    } catch ( err ) {
        console.log( "N2E1 > " + err.message );
    }    
    
}


//Nivel 3 Ejercicio 1
/* Captura tots els errors possibles dels nivells 1 i 2. */
// Fet



/* Prueba de código */
// Nivel 1. Ejercicio 1 y 2
getEmployeeAndSalary(1);
getEmployeeAndSalary(4);
getEmployeeAndSalary(5);

// Nivel 2. Ejercicio 1
esperar(2);
esperar("Hola");