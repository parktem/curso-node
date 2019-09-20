/*Esto es lo mismo que una función que devuelve una promesa. El reject aquí se dispara solo si hay algún error,
  como se puede comprobar poniendo un "undefined.nombre"*/

  let getNombre = async() => {
    return 'Fernando';
  }

let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fernando');
        }, 3000);
    })
}

let saludo = async () => {
    let nombre = await getNombre2();
    return 'hola' + nombre;
}

saludo();

getNombre().then( res => {
    console.log(res)
}, err => {
    console.log('error');
});
