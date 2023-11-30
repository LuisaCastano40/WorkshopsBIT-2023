//Traemos los elementos de nuestro HTML que vamos a manipular

// let -> cambia con el tiempo
// const -> no cambia en el tiempo
//y9o quiero que la variable que contiene mi elemento de html siempre contenga ese mismo elemnto

const pantalla = document.getElementById("pantalla");
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');

// Inicializando la variable resultado, que va a cambiar según la suma, resta, multiplicación o división
let resultado = 0;

//Funciones

// Declaración de funciones en js
function suma(){

    // En js yo puedo convertir las variables de un tipo de dato a otro, con un método -> PARSE
    // todos los VALORES DE UN INPUT SON DE TIPO STRING (texto) -> siempre tienen que hacer el parse 
    // el .value es para acceder al valor que ingreso en mi Input
    // el .textContent nos permite acceder al contenido de mi elemento de HTML

    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    resultado = numero1 + numero2;
    pantalla.textContent = resultado;
    inputNumero1.value = '';
    inputNumero2.value = '';
}

function resta() {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);
    
    if(isNaN(numero1) || isNaN(numero2)){
        alert('ingrese todos los datos');
    }else{
        resultado = numero1 - numero2;
        pantalla.textContent = resultado.toFixed(2);
        inputNumero1.value = '';
        inputNumero2.value = '';
    }
}

//Funciones flecha
const multiplicacion = () => {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);

    if(!isNaN(numero1) || !isNaN(numero2)){
        resultado = numero1 * numero2;
        pantalla.textContent = resultado.toFixed(2);
        inputNumero1.value = '';
        inputNumero2.value = '';
    }else{
        alert('ingrese todos los datos');
    }
}

const division = () => {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);
    
    if(!isNaN(numero1) || !isNaN(numero2)){
        resultado = numero1 / numero2;
        // Método toFixed nos permite redondear decimales a la cantidad que queramos
        pantalla.textContent = resultado.toFixed(2);
        inputNumero1.value = '';
        inputNumero2.value = '';
    }else{
        alert('ingrese todos los datos');
    }
}


