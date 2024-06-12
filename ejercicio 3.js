function applyPunto(punto){             //funcion que agregara propiedades y metodos al objeto llamado con call()
    this.x = punto.x;                   //el valor del vertice x del objeto punto se le asignara al objeto llamado con apply()
    this.y = punto.y;                   //el valor del vertice y del objeto punto se le asignara al objeto llamado con apply()
    this.sumar = function(punto){       //metodo sumar que se le asignara al objeto llamado con apply()
        suma = punto.x + punto.y;       //se suman los valores x e y del objeto punto y se almacenan en la variable suma
        console.log("La suma de las coordenadas es " + suma);   //se despliega el resultado suma
    }
}

//creacion de los objetos punto 1 y punto 2
punto1 = {x:1,y:1};
punto2 = {x:2,y:2};

function sumarPuntos(punto1, punto2){        //funcion que tomara los dos objetos puntos para despues ejecutar la funcion
    applyPunto.apply(punto1, [punto2]);     //se llama al punto 1 para asignarle los valores de punto 2
}

sumarPuntos(punto1,punto2);                 //ejecucion de la funcion

//Ejecucion de las funciones y despliegue de los resultados en consola
console.log("\n\nPunto 1 despues de absorber las propiedades de punto 2 y de agregardo el metodo sumar");
console.log(punto1);
console.log("\n\nEjecutando punto1.sumar()...\n");
punto1.sumar(punto2);