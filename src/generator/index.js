//Un generator en JS consta de una función generadora que muestra un objeto iterable generator. La palabra reservada yield se usa para pausar y reanudar una función generaddora. 
//La estructura del generator consta conla palabra function  seguido de un asterisco: "function*.
//El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo (string, numérico, objetos, etc) y se puede tener tantos yield como se desee.  

//Declaración de la función gerador
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

//Para poder iterar con el generador, se puede inicializar un valor con la función generadora:

const g=gen();//Expresión de la función generadora

//Entre las propiedades del iterador está next():
console.log(g.next().value)//Llamada del método next en el objeto del generador.Imprime el primer yield:{value:1, done:false}
console.log(g.next().value)

//next() permite acceder a la función del generador y obtener con yield dos valores: value y el estado de "done", es decir  si tenemos  yield 1; y mandamos a imprmir el resultado con next() obtenemos {value:1, done: false}.
//El 1 por el valor al lado derecho del primer yield y "done" es false porque mientras haya otro yield por operar será falso. Será true cuando se ejecute cuatro veces next() y la salida mostrará {value:undefined, done:true} debido a que ya no hay mas que mostrar, porque se mandó a imprimir un cuarto elemento y el generador solo tiene 3 yield. 

function*itarate(array){
    for(let value of array){
        yield value;
    }
}
const it=itarate(["Kelly", "Ana","Sol", "Sammy"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
