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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if( !empleadoDB ) {
        callback('No existe un empleado con el ID ' + id)
    } else {
        callback(null, empleadoDB)
    }
}

getEmpleado(1, (err, empleado) => {
    console.log(empleado);
    console.log(err);
    
});