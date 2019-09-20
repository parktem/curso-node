let empleados = [{
    id: 1,
    nombre: 'Fernando'
},{
    id: 2,
    nombre: 'Raúl'
},{
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 100
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        
        if( !empleadoDB ) {
            reject('No existe un empleado con el ID ' + id)
        } else {
            resolve(empleadoDB)
        }
    });
}

getEmpleado(4).then( empleado => {
    console.log('Empleado de BD', empleado);
}, err => {
    console.log(err);
}) //También se podría usar un catch


let getSalario = (empleado) => {
    return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if(!salarioDB) {
            reject('No se encontró un salario para el usuario ' + empleado.id);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
        }
    })
}

getSalario(empleados[2]).then( salario => {
    console.log(salario);
}, err => {
    console.log('No existe salario para esta persona');
})