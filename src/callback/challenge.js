//--------HMLHTTPRequest-------
// XMLHttpRequest es un objeto de JS que permite hacer peticiones hacia servicios en la nube (URLs O APIs). 
//Existen 5 ESTADOS A UN LLAMADO XMLHttpRequest: 
    //  1. Estado 0--->se ha inicializado. 
    //  2. Estado 1--->Loading(cargando). 
    //  3. Estado 3--->Procesamiento si existe alguna descarga. 
    //  4. Estado 4--->Completado.
//MÈTODOS O PROPIEDADES:
    //xmlhttp.open()-->Prepara la peticiòn para ser enviada tomando tres paràmetros: protocolo, url, asìncrono(true).
    //xmlhttp.readyState--> Retorna el estado de la peticiòn.
    //xmlhttp.onreadystatechange-->Un eventHandler que es llamado cuando la propiedad readyState cambia.
    //xmlhttp.send()-->Envìa la peticiòn.
// CARACTERÌSTICAS DEL PROTOCOLO HTTPP:
    //VERBOS: Los verbos indican acciones que estàn asociadas a peticiones y recursos, es decir, sirven para la manipulaciòn de recursos cliente/servidor. Los verbos http son: 
        //GET: Solicita un recurso:
        //HEAD: solicita un recurso pero sin ret0rnar información, la estructura de esta petición  es igual que get tanto en su hearders coo status. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado. 
        //POST: Sirve para la creación de recursos en el servidor.
        //PUT: Actualiza por completo un recurso, reemplza todas las representaciones actuales del recurso de destino con la carga útil de la petición. 
        //PATCH: Actualiza parcialmente un recurso.
        //DELETE: Elimina un recurso.
//CÓDIGOS DE ESTADO DEL SERVIDOR:El código de estado (status codes) sirve para describir el estado de la petición hecha al servidor.
    // 1. 1xx: Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor.
    // 2. 2xx: Indican que la petición fue recibida, aceptada y procesada correctamente.
    //3. 3xx: Indican que hay que tomar acciones adicionales para completar la solicitud. 
    //4. 4xx:Indican errores del lado del cliente, que se hizo mal la solicitud. 
    //5. 5xx: Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor. 
//Los errores más comunes a la hora de interactuar con una API son:
//200--->OK : Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente. 
//204-->No content: Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
//400--->Bad Request: Indica que algo está mal en la petición (no encontró algo).
//401--->Unauthorized: Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
//403--->Forbidden: Indica que no tenemos acceso a ese recurso aunque ese recurso esté autenticado.
//404--->Not found: Indica que no exite el recurso que se está intentando acceder. 
//500-->Internal Server Error: Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. 


//1. Primero debemos declarar e importar el paquete de XMLHttPRequest, que nos permite utilizar objetos (XHR) para interactuar con servidores (en este caso la API de platzi) para esto hacemos:
const XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;//llamado al XmlHttpRequest. Lo que hace aquí "require()" es importar el módulo del id que le pasemos, además puede importar JSON y archivos locales. Pero necesitamos trabajar con XMLHttpRequest para manipular la API.

//2. Declaramos con constante la url de la API:

const API="https://api.escuelajs.co/api/v1";//API en mayúscula porque es una referencia que no va a cambiar.

//3. Funciòn principal que obtendrà la informaciòn del producto como un objeto.
function fetchData(urlApi, callback){
    //urlApi:no confundir y colocar API. El parámetro "urlApi" hace referencia a cualquier API con la cual estemos trabajando, en este caso la FakeStores de platzi. El segundo parámetro "callback" es donde posteriormente vamos a pasar una función como argumneto para poder controlar el flujo de información de la API. 

//4. Necesitamos alguna manera de poder manipular las solicitudes que haremos para consultar los datos, para ellos vamos a crear un espacio en memoria (una variable) en donde guardar el objeto (XHR) que importamos y gracias a los métodos ya construidos nos será mil veces más fácil desarrollar nuestra función.
    let xhttp=new XMLHttpRequest();//Si esta familiarizado con OOP(programación Orientada a Objetos) sabrás entonces que esto no es más que un constructor vacío.

//5. Muy bien, ya podemos utilizar nuestra variable "xhttp"(en conjunto al callback) como un objeto para acceder y manipular la API. Primero debemos abriruna solicitud(un request) esto lo hacemos con el método "open()"
    xhttp.open("GET", urlApi, true);//Este mètodo recibe tres paràmetros:el primer parámetro es el tipo de solicitud que vamos a realizar, pudo haber sido "POST", "PUT", "DELETE". pero vamos a utilizar "GET". El segundo parámetro es la url de la API a la cual le vamos a realizar el request. El último y tercer parámetro recibe un booleano para indicarle si vamos a utlizar asincronismo o no, tal como TRUE o FALSE según el caso.

//Vamos a hacer una función anónima para verificar que el request de los datos ha salido con éxito y en caso de tener un error hacer registro de éste. Para ello nos vamos a aporyar de la propiedad de ".onreadystatechange" esta llamará a la función cada que el "readyState" cambie (readyState retorna el número del estado en dónde se encuentrael request)
    xhttp.onreadystatechange=function(event){
        //Escucha diferentes estados de la solicitud y conocer cuándo está disponible la información.

        //El ciclo de vida del readyState es el siguiente: 
            //0---> UNSET:Client has been created. open() not called yet. 
            
            //1-->OPENED: Open() has been called.

            //2--->HEADERS_RECEIVED: send() has been called, and headers and status are available.

            //3--->LOADING: Downloading, responseText hold partial data.

            //4--->DONE: the operation is complete
        if(xhttp.readyState===4){//Entonces debemos parar en cuatro cuando la oiperación ha sido completada. Una vez completado con éxito necesitamos saber que tipo de respuesta nos entregó el servidor, así que volvemos a verificar con un if la propiedad ".status" segpun el tipo de respuestas:(informational respnses(100-199), successful responses(200-299), redirection messages(300-399), client error responses(400-499), server error responses(500-599))
            
            if(xhttp.status===200){//El servicio responde de forma correcta. Ya comprobamos que tanto el request como el response hayan sido exitosos.
                
                //Ahora podemos invocar nuestro callback que va a recobir como parámetros un objeto. Como la respuesta de la API es un texto plano, el método JSON.psrse transformará este etxto en un objeto. 
                callback(null,JSON.parse(xhttp.responseText));//dentro de xhttp.responseText recibimos lo que entrega el servidor en texto y se hace la transformación en JSON. El atributo devuelve un DOMString que contiene la respuesta a la consulta como un texto o null si la conssulta no tuvo éxito o aun  no ha sido completada.

                //Si la respuesta de la API no es exitosa se captura el arror.
            }else{
                    //se inicializa un objeto de tipo Error donde se le envía como argumentos un mensaje de error y la URL de la API para conocer en dónde se produjo el error.
                    const error = new Error("Error"+urlApi);

                    //Se ejecuta el callback recibiendo como argumentos el error y null debido a que no se pudo  obtener el objeto.
                    return callback(error, null);
            }

            //¿Y porqué tiene tantos parámetros el callback si aún nisiquiera lo hemos definido? El primeor lo vamos a utilizar en caso se presente un error, pero como ya hemos verificado eso podemos simplemente dejarlo como un "null". En el segundo usamos la función "JSON.parse()" para convertir en datos que podamos controlar el texto que nos retorna la propiedad ".responseText" después de hacer el request. 
            //Listo, dejamos preparado nuestro callback sin errores y con la información "traducida" para cualquier momento en el que necesitemos usarla. Pero ¿Y si el request no es exitoso?¡Quéva a pasar con nuestra función?. Hay que regresarnos al primer if y utilizar la estructura de else para que en caso de haber un error registrarlo y enviarlo al callback(donde antes habíamos puesto "null") y ahora pasar null en la parte de los datos, ya que nunca pudo consultarlos.
            //es un null porque no se está regresando ningún dato
        }
    }
    //Acabamos la función, ya solo resta utilizar el método "send()" después de procesar los datos para enviar el request al server(API).
    xhttp.send();
}

//Se invoca el método fetchData() pasándole como argumentos la variable API concatenada con la cadena "products" para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API)
fetchData(`${API}/products`, function(error1, data1){

    //Se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error.
    if (error1) {
        return console.error(erro1)

        //Se invoca muevamente la función fetchData con el fin de acceder a un  objeto puntual del arreglo data1, se envía como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una funcion anónima
    }else{
        fetchData(`${API}/products/${data1[0].id}`,function(error2,data2){
            if(error2){
                //Si en este punto indentifica un error se imprime en consola y se detienen el proceso.
                return console.error(error2)
            }else{

                //Se invoca nuevamnete la funcion fetchData con el fin de acceder a la categoría, se envían como parámetros la url de la API con la concatenación de "Categories" y el atributo ID de categoría del objeto data2 de la funciónanterior. Igual que las anteriores envpia una función anónima con 2 argumentos, un objeto Error y un objeto de datos.
                fetchData(`${API}/categories/${data2?.category?.id}`,function(erro3, data3){//En este caso puntual se hace uno de optional chaining, el cual hace una evaluación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.

                    //Se valida si existe un error, en caso exista se detiene el proceso y se imprime el error.
                    if(erro3){
                        return console.error(erro3)
                    }else{
                        //Se imprime el objeto en la posición del arreglo de los objetos obtenidos en el mpetodo invocado inicialmnete.    
                        console.log(data1[0]);

                        //Imprime el título del objeto que se consultó en la segunda invocación de la función.
                        console.log(data2.title);

                        //Se imprime el nombre Se la categoría a la pertenece el objeto que se consultó en la segunda invocación del método.
                        console.log(data3.name);
                    }
                })
            }
        })
    }
})
