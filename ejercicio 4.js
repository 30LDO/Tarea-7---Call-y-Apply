//funcion que invocara apply para almacenar el punto mas lejano del origen
function masLejano(punto){                        
    if (Math.abs(this.x + this.y) <= Math.abs(punto.x + punto.y)){      //Si el valor absoluto del objeto mas lejano es menor que 
        this.x = punto.x;                                               //el valor absoluto del siguiente punto con el cual lo estamos 
        this.y = punto.y;                                               //comparando, el nuevo punto mas lejano sera el segundo   
    }
}


function puntoMasLejano(puntos){
    let lejano = {x:0 , y:0};                   //se crea un objeto lejano para comparar con los demas y almacenar el mas lejano
    for (let i = 0; i < puntos.length; i++) {   //ciclo for donde se recorre el array y se compara con el objeto pivote lejano
        masLejano.apply(lejano, [puntos[i]]);   //se utiliza apply para que lejano absorba las propiedades del punto mas lejano
    }                                           //si en dado casi aplica
    return lejano;                              //se retorna el objeto mas lejano
}

//creacion de los puntos a comparar
punto1 = {x:1, y:1};                            
punto2 = {x:2, y:2};
punto3 = {x:3, y:3};

let puntos = [punto1,punto2,punto3];        //se insertan los puntos en el array

//resultado
console.log("El punto mas lejano del origen es: "); 
console.log(puntoMasLejano(puntos));