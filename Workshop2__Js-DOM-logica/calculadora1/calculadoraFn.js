//Traemos los elementos de nuestro HTML

//Inputs de los números
const pantalla = document.getElementById('pantalla');
const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');

console.log(inputNumero1);

let resultado = 0;

//Funciones
function suma() {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);
    resultado = numero1 + numero2;
    pantalla.textContent = resultado.toFixed(2);
    inputNumero1.value = '';
    inputNumero2.value = '';
    console.log(numero1);
    console.log(numero2);
}

function resta() {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);
    
    if(numero1=='' || !numero2==''){
        resultado = numero1 - numero2;
        pantalla.textContent = resultado.toFixed(2);
        inputNumero1.value = '';
        inputNumero2.value = '';
    }else{
        alert('ingrese todos los datos');
    }
}

//Funciones flecha
const multiplicacion = () => {
    //Guardamos el valor ingresado
    const numero1 = parseFloat(inputNumero1.value);
    const numero2 = parseFloat(inputNumero2.value);

    if(numero1=='' || !numero2==''){
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
    
    if(numero1=='' || !numero2==''){
        resultado = numero1 / numero2;
        pantalla.textContent = resultado.toFixed(2);
        inputNumero1.value = '';
        inputNumero2.value = '';
    }else{
        alert('ingrese todos los datos');
    }
}


