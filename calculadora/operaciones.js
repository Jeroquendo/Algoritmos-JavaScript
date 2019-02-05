'use strict'

let suma = (a, b) => a + b

let resta = (a, b) => a - b

let multiplicar = (a, b) => a * b

let division = (a, b) => {
    if (b == 0) { console.log("No se puede resalizar esta division") }
   else return a / b
} 

let potenciacion = (a, b) => a ** b

let modulo = (a, b) => a % b

let raiz = (a) => Math.sqrt(a)

//Manejo del DOM por medio de un botón
document.getElementById("miBtn").addEventListener("click",function empezar(){
     
   let mensaje = "Ingresa un número del menú: "

   //while(true){
   let numeroMenu = prompt(mensaje, " ");
       numeroMenu = parseInt(numeroMenu);
   switch (numeroMenu) {
      case 0:
         break;
      
      case 1:
         let opSuma = prompt("ingrese la suma", "1+1")
         let numSuma = opSuma.split("+")
         let resulSuma = suma(Number(numSuma[0]), Number(numSuma[1]))
         alert("El resultado de la suma es: " + resulSuma)
         break;
      case 2:
         let opResta = prompt("ingrese la resta"," 1 - 1")
         let numResta = opResta.split("-")
         let resulRes = resta(Number(numResta[0]), Number(numResta[1]))
         alert("El resultado de la resta es: " + Math.round(resulRes))
         break;
      case 3:
         let opMult = prompt("ingrese la multiplicacion"," 1x1")
         let numMult = opMult.split("x")
         let resulMult = multiplicar(Number(numMult[0]), Number(numMult[1]))
         alert("El resultado de la multiplicacion es: " + resulMult)
         break;
      case 4:
         let opDivision= prompt("ingrese la division"," 1/1")
         let numDivision = opDivision.split("/")
         let resulDivision = division(Number(numDivision[0]), Number(numDivision[1]))
         alert("El resultado de la division es: " + resulDivision)
         break;
      case 5:
         let opPoten = prompt("ingrese la base y el exponente"," 1,3")
         let numPoten = opPoten.split(",")
         let resulPoten = potenciacion(Number(numPoten[0]), Number(numPoten[1]))
         alert("El resultado es: " + resulPoten)
         break;
      case 6:
         let opMod = prompt("ingrese el numero y despues el modulo que quiera"," 1%1")
         let numMod = opMod.split("%")
         let resulMod = modulo(Number(numMod[0]), Number(numMod[1]))
         alert("El resultado es: " + resulMod)
         break;
      case 7:
         let opRaiz = prompt("ingrese el numero para sacarle raiz cuadrada"," 1")
         let numRaiz = opRaiz.split("")
         let resulRaiz = raiz(Number(numRaiz[0]), Number(numRaiz[1]))
         alert("El resultado de la multiplicacion es: " +  resulRaiz.toFixed(2))
         break;
      
      default:
         break;
   }    
   
   //}

}, true);
    


