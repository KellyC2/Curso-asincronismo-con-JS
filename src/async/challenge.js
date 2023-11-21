//En esta clase vamos a implementar lo aprendido de async/await usuando la API y una nueva estructura con try/catch. Importante recordar que la esctructura de async y await se compone por la palabras reservadas async y await. 
//La palabra async se coloca antes de la función (la otra forma es con funciones flecha en que el async va antes que los argumentos. )
//La palabra await se utliza dentro de las funciones async. 
//Otra forma de hacer que async/await espere a varios llamadps a la vez es con la estructura:try/catch.
//la palabra reservada try consiste en un bloque que contiene una o más sentencias, como hacíamos con resolve. Su cuerpo esta conformado por las llave{} las cuales deben utilizar siempre, incluso para un bloque de una sola sentencia. 
//Un bloque catch es opcional (como hacíamos con reject) y contiene sentencias que especifican que hacer si una excepción es lanzada en el bloque try. Si no se lanza ninguna excepción en el bloque try, el bloque catch se omite.

import fetch from "node-fetch";
const API= "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi){
    const response= await fetch(urlApi);
    const data= await response.json();
    return data;
}

const asyncExpessionFunction=async(urlApi)=>{
    try{
        const products=await fetchData(`${urlApi}/products`);
        const product=await fetchData(`${urlApi}/products/${products[0].id}`);
        const category=await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);      
    } catch(error){
        console.error(error);
    }
}

asyncExpessionFunction(API);