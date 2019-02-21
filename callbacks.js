"use strict"

function ejemplo(arreglo, callback) { 
    if (arreglo.length > 0 && arreglo instanceof Array) {
        let resultado = arreglo.map((x) => { return Math.sqrt(x) })
        return callback(null, resultado)
    } else { 
        let error = new Error("No se pudo cuchito")
        return callback(error, null)
    }
}

/*let callback = (error, resultado) => {
    if (error != null) {
        console.log(resultado);
    } else { console.log(error);
    }
} */


ejemplo([3,4,6,49,68], (error, resultado) => {
    (error) ? console.error(error) : console.log(resultado)
})
