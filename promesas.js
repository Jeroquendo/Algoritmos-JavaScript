"use strict"

let promesas = (arreglo) => {
    let promesa = new Promise((resolve, reject) => {
        if (arreglo.length > 0 && arreglo instanceof Array) {
            let raiz = arreglo.map((x) => Math.sqrt(x))            
            resolve(raiz);
        } else {
            let error = new Error("No se pudo cuchito");
            reject(error)
        }
    });
    return promesa;
}
 
promesas([])
    .then((resultado) => { console.log(resultado); })
    .catch((error) => {console.error(error);})