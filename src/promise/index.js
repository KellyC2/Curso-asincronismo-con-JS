//¿Què son las promesas?Las promesas son funciones asìncronas que buscan resolver o rechazar alguna sentencia. Varias promesas pueden llegar a entrar en ejecuciòn al mismo tiempo. Las promesas pueden suceder ahora, en el futuro o nunca. 




//Para crear una promesa utilizamos las palabra reservada "new" seguida de la palabra "Promise" qeu es el constructor de la promesa. Este constructor recibe un ùnico paràmetro que es una funciòn , la cual a su vez recibe dos paràmetros: resolve y reject.El parametro "resolve se utiliza para cuando la promesa devuelve el valor correctamente" y el paràmetro "reject" se usa en el caso de que no funciones.
const promise=new Promise(function(resolve, reject){
    resolve("hey!")
});// Cuando llamamos a "resolve" entonces la promesa pasa a estar resuelta.Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al método ".then". Si llamamos a reject pasa a estar rechazada (obtenemos un error qeu nos va a indicar la razón del rechazo), si la promesa es rechazada entonces se ejecuta la función que pasamos a ".catch"

//EJEMPLO:Vamos a determinar si la cantidad de vacas es suficientes para generar la leche para venta.
const cows=9; //Valor inicial de vacas. el valor puede cambiar.
const countCows= new Promise(function(resolve, reject){
    if(cows > 10){//Sólo si el número de vacas supera 10 se llama a resolve.
        resolve(`we have ${cows} cows on the farm`)
    } else{// si es menor o igual a 10 se llama a reject.
        reject("There is no cows on the farm");
    }
});

countCows.then((result)=>{//se obtienen el resultado de la promesa de acuerdo a resolve o reject.
    console.log(result);
}).catch((error)=>{//podemos obtener más información de un futuro error que se presente
    console.log(error);
}).finally(()=>{//podemos imprimir un mesaje que indica que ya se ejecutó la promesa.
    console.log("Finally");
})