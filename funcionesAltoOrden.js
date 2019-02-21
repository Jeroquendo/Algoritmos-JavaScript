"use strict"

let promedio = (...numeros) => {
    return numeros.reduce((resultado, sumador) => { 
        return resultado+= sumador
        
    })/numeros.length
} 

let primos = (...numeros) => { 
    return numeros.filter((x) =>{
        if (x%2==0 && x!=2) { 
        return false
        }else if (x%3==0 && x!=3) {
            return false
        }else if (x%5==0 && x!=5) {
            return false
        }else if (x%7==0 && x!=7) {
            return false
        }else {
            return true
        }
    })
} 

let gramos = (...numeros) => {
    return numeros.map((x) => { 
        return x = x / 1000
   })
}

let kilogramos = (...numeros) => {
    return numeros.map((x) => { 
        return x = x * 1000
   })
}

console.log(promedio(4, 7, 2, 5));
console.log(primos(4, 7, 11, 5));
console.log(gramos(3,5,7,2));
console.log(kilogramos(3,5,7,2))
