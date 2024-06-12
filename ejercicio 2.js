function callPunto(){                       //funcion que agregara propiedades y metodos al objeto llamado con call()              
    this.dibujar = function(dx,dy, dz){     //funcion que dibujara el punto a partir de los valores dados
            this.x = dx;                    //el vertice x sera igual al valor dx asignado
            this.y = dy;                    //el vertice y sera igual al valor dy asignado
            this.z =dz;                     //el vertice z sera igual al valor dz asignado
    }
    this.mover = function(dx,dy, dz){       //funcion que aumentara o disminuira el vertice segun el valor asignado
        this.x += dx;                       //x aumentara dx unidades
        this.y += dy;                       //y aumentara dy unidades
        this.z +=dz;                        //z aumentara dz unidades
    }
    this.informar = function(dx,dy, dz){    //funcion que muestra las coordenadas donde se ubica el punto actualmente
        console.log("\n\nCoordenada actual = (" + this.x + "," + this.y + "," + this.z + ")" );
    }
}

let punto = {x:1,y:2,z:3};          //creacion inicial del objeto punto

function extenderPunto(punto){      //funcion que llama al objeto punto para agregarle las propiedades de la funcion extenderPunto
    callPunto.call(punto);          //usamos call para llamar a la funcion 
}

console.log("\nMostrando punto inicialmente");
console.log(punto);
extenderPunto(punto);               //se ejecuta la funcion extenderPunto para asignar los metodos
console.log("\n\nMostrando punto despues de ser extendido");
console.log(punto);                 
punto.dibujar(5,10,15);             //se ejecuta la funcion dibujar para dibujar un punto con coordenadas x=5, y=10, z=15
punto.informar();                   //se ejecuta la funcion informar para mostrar las coordenadas
punto.mover(2,2,2);                 //se ejecuta la funcion mover para mover el punto 2 unidades en cada vertice (x.y,z)
punto.informar();                   //se ejecuta la funcion informar nuevamente para mostrar como fue movido el punto

