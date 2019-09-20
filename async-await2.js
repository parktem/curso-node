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

getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return resp.nombre + " tiene un salario de " + resp.salario;
}

getInformacion(3).then(resp => console.log(resp), err => console.log('No se encuentra la información'));