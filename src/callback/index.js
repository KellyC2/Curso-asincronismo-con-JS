//CALLBACK:Un callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//ejercicio 1
function sum(num1, num2){
    return num1+num2
}
function calc(num1, num2, miCallback){
    return miCallback(num1, num2)
}
console.log(calc(2,3, sum));//5

//ejercico 2
function saludar (nombre){
    console.log(" Hola " + nombre);
}

function procesarEntradaUsuario(miFunctionCallback){
    let name = "Kelly";
    miFunctionCallback(name);

};
procesarEntradaUsuario(saludar);

//ejercicio3
setTimeout(function(){
    console.log("Hola Kelly, lo estas haciendo muy bien");
},5000)

function gretting (yourName){
    console.log(`hola ${yourName}`);
}
setTimeout(gretting, 3000,"KELLY" )