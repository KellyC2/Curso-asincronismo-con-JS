//Hay permisos necesarios que se deben tomar en cuenta para que el intercambio de informaciòn sea seguro, hay que especificar el modo(mode), aquì se indica si se permite solicitudes de origen cruzado. ¿què es un origen cruzado? Un origen tienen "dominio/protocolo/puerto", un origen cruzado denominado "cross origin" es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la peticiòn. Asì que se coloca "cors", indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST  para salvaguardar y evitar manipulaciones maliciosas. 


import fetch from "node-fetch";
const API="http://api.escuelajs.co/api/v1";

function postData(urlApi, data){//Ya no se solicta informaciòn sino se guardarà informaciòn.
    const response = fetch(urlApi,{
        method:"POST",//Tiene que ir en mayùscula
        mode:"cors",//cors es el permiso que va a tener, por defecto va a estar siempre con cors
        credentials:"same-origin",//es opcional
        headers:{
            "Content-Type":"application/json"//necesario indicar que lo que se està enviando es de tipo json
        },
        body:JSON.stringify(data)//el mètodo JSON.stringify() convierte un objeto o valor de JS en una cadena de texto JSON
    })
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST.
const data={
    "title": "my challenge",
    "price": 99,
    "description": "I`m trying to create a new product",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo despuès en la consola
postData(`${API}/products`, data)
.then(response=>response.json())
.then(data=>console.log(data));