//la declaración de una función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todos la compilación . Dada que la finalidad de las funciones async/await es simlificar el comportamiento del uso síncrono de promesa , se hace más fácil escribir promesas. La esteructura se compone  por las palabras reservadas async y await.
//La palabra async antes de la función, hace que la función devuelva una promesa.
//La palabra await se utiliza dentro de la funciones async, lo que hace que el programa espere hasta que la variable (promesa se resuelva) para continuar.
const miPromesa=()=>{
    return new Promise((resolve, reject) => {
        (true)
        ?setTimeout(()=>{resolve("mi priomesa usando async!!");},2000)
        :reject(new Error("Ups! No pudimos ejecutar mi promesa"));
    })
}

const myAsyncFunction = async()=>{
    const miPromiseResponse= await miPromesa();
    console.log(miPromiseResponse);
    console.log("esta sentencia es invocada despues de invocar la respuesta de mi promesa");
}

console.log("Antes de invocar mi función async");
myAsyncFunction();
console.log("Se invoca después de mi función async");


//EJEMPLO 2
const myPromise=()=>{
    return new Promise((positivo, negativo)=>{
        (true)
        ?setTimeout(()=>{positivo("Logramos resolver la promesa, noticias positivas")},6000)
        :negativo(new Error("Malas noticias, no pudimos resolver la promesa"));
    })
}

const miAsyncForNegative=async()=>{
    const myNegativeAnswer=await myPromise();
    console.log(myNegativeAnswer);
    console.log("this messages will be print after I got my response from promise");
}

console.log("This is print before any function is exexuted");
miAsyncForNegative();
console.log("this message will be print before the answer of async function even when is called after my async function because my async function dont stop any execution ");