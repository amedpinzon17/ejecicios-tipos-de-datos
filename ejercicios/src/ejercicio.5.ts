

 import*as readlineSync from 'readline-sync';

//! 5. Construir el algoritmo que lea por teclado dos números,
//! si el primero es mayor al segundo informar su suma y
//! diferencia, en caso contrario, informar el producto y la
//! división del primero respecto al segundo. 





let numero1:number = Number(readlineSync.question('Ingrese un numero: '));
let numero2:number = Number(readlineSync.question('Ingrese un segundoo numero: '));

if(numero1 > numero2){
   let suma = numero1 + numero2;
   let resta = numero1 - numero2;

   console.log(`la suma de los numeros es ${suma}`);
   console.log(`la diferencia de los numeros es ${resta}`);

}else{
   let producto = numero1 * numero2;
   let divicion = numero1 / numero2;

   console.log(`el productao de los numeros es ${producto}`);
   console.log(`la didvicion de los numeros es ${divicion}`);
    
} 






//!  7. Programa que pida el ingreso del nombre y precio de un artículo y la
//! cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
//! en su factura.  */


let nombre:string = String(readlineSync.question('nombre del articulo: '));
let precio:number = Number(readlineSync.question('precio de los articulo: '));
let cantidad:number = Number(readlineSync.question('cantidad de los articulo: '));

let total:number = precio*cantidad;


console.log(`el nombre del articulo es: ${nombre}`);
console.log(`precio por unidad: ${precio}`);
console.log(`Cantidad comprada: ${cantidad}`);
console.log(`total a pagar: ${total}`);



//! 9. N atletas han pasado a finales en salto triple en los juegos
//! olímpicos femenino de 2022. Diseñe un programa que pida por
//! teclado los nombres de cada atleta finalista y a su vez, sus
//! marcas del salto en metros. Informar el nombre de la atleta
//! campeona que se quede con la medalla de oro y si rompió
//! récord, reportar el pago que será de 500 millones. El récord
//! esta en 15,50 metros.


let pago:string = "no"
let record:number = 15.50;
let nombreP: string= "";
let marcas:number= 2;
let Marcas:number=0;
let Nombre:string = "";
let atletasFinaliztas:number = 2;

for (let n:number = 0; n < atletasFinaliztas; n++){
    Nombre= "sherman";
    Marcas= 12;
    
    for(let f= 0; f < Marcas; f++ ){
        marcas=90;
        
        if(marcas > record){
            record = marcas;
            nombreP = Nombre;
            pago = "si";
        }
    }
}

console.log(`El ganador de la medalla de oro fue ${nombreP} con una marca de salto ${record} y ${pago} se le da el pago de 500millones`);