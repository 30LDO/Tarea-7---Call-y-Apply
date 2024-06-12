function callPunto(dx, dy){                //funcion que agregara propiedades y metodos al objeto llamado con call()
    this.x = dx;                           //la propiedad x del objeto sera igual al parametro dx
    this.y = dy;                           //la propiedad y del objeto sera igual al parametro dy
    this.mover = function(dx,dy, dz){      //metodo mover que mueve las coordenadas del punto de acuerdo a los valores de los parametros
            this.x += dx;                  //el valor x del objeto se movera dx unidades
            this.y += dy;                  //el valor y del objeto se movera dy unidades
            this.z +=dz;                   //el valor z del objeto se movera dz unidades
    }
}

function moverPunto(punto, dx, dy){         //funcion que cambiara las propiedades del objeto punto mediante call()
    callPunto.call(punto, dx, dy);          //se llama al objeto punto para asignarle las propiedades de la funcion callPunto         
}

let miPunto = {z: 5};                       //creacion del objeto inicial miPunto

console.log("Objeto miPunto original");
console.log(miPunto);                      
moverPunto(miPunto, 1, 2);                  //los valores 1 y 2 se le asignaran al objeto miPunto
console.log("Objeto miPunto despues de cambiar sus propiedades");
console.log(miPunto);                                         
miPunto.mover(5,5,5);
console.log("Objeto miPunto despues de moverse 5 unidades en cada vertice");
console.log(miPunto);








