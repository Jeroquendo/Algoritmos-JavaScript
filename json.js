estudiante = {
    "Nombre": "Juan R",
    "cedula": "12341231",
    "telefono": "231321",
    "valor": 500000,
    "calcular": matricula=(numero)=>{
    if(numero>1000){
    console.log("Pague por gvn");
    }else{
    console.log("No paga por estudiar o por pobre");
    }
    },
    "Universidad":Universidad = {
    "nombre":"UdeA",
    "facultad":"ingenieria",
    "Jefe":"Botia"
    }
    
    }
    estudiante.valor= 900
    estudiante.calcular(estudiante.valor)
        
    function estudiante2(nombre, carrera, valor, cedula){
    let nom = nombre;
    this.carrera = carrera;
    this.valor = valor;
    this.cedula = cedula;
    
    console.log("Nombre:"+nom);
    console.log("carrera: "+this.carrera);
    console.log("Celular: "+this.valor);
    console.log("cedula: "+this.cedula);
    }
    
    
    estudiante2("Rodas","Sistemas", "1221212", 700)
    estudiante2("juan esteban", carrera)