// Nivel 1 Ejercicio 1
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

    const exito = (result)=>{
        console.log('Exito',result);
    }
    const fracaso = (result)=>{
        console.log('Fracaso',result);
    }

    promesa1    
        .then(exito)
        .catch(fracaso);

    promesa2    
        .then(exito)
        .catch(fracaso);
}

// Nivel 1 Ejercicio 2
const imprimirBonito = texto => console.log(`--%% ${texto} %%--`);
const textoAImprimir = (parametro, funcion)=>{
    funcion(parametro);
}
// Nivel 2 Ejercicio 1
/*
Donats els objectes employees i salaries, crea una arrow function getEmployee 
que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/
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
const getEmployeeAndSalary = (id) => {
    getEmployee(id)
        .then(getSalary)
        .then( res => console.log("hola",res))
        .catch( err => console.log(err.message));
}



module.exports.probarPromesa = probarPromesa;
module.exports.imprimirBonito = imprimirBonito;
module.exports.textoAImprimir = textoAImprimir;
module.exports.getEmployee = getEmployee;
module.exports.getSalary = getSalary;
module.exports.getEmployeeAndSalary = getEmployeeAndSalary;