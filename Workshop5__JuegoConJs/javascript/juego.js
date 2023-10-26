// 1. Creamos un arreglo para almacenar nuestras palabras
// Pondremos un mismo tipo - todas son animales
const palabras = ['jirafa', 'loro', 'leon', 'pinguino', 'perro'];

// 2. Traemos elementos del html - manipulación del DOM
const adivinarPalabra = document.getElementById('adivinarPalabra');
const dibujito = document.getElementById('ahorcado');
const inputLetra = document.querySelector('#letra');

const btnLetra = document.querySelector('.btn-letra');

// 3. Se elige una palabra al azar
//random() -> nos genera un numero pseudoaleatorio 0 - 1 - 0-4 4 
//floor() -> nos redondea un decimal a un número entero por debajo
//ceil() -> nos redondea un decimal a un número entero por encima
const randomIndex = Math.floor(Math.random()*palabras.length);
let palabraRandom = palabras[randomIndex];
console.log(palabraRandom,palabraRandom.length);
// constructores -> plantilla para crear elementos de interés
//fill() -> método de los arreglos que nos permite llenarlos con lo que queramos - llenar espacios vacíos en un arreglo
let guionesPorPalabra = Array(palabraRandom.length).fill('_');
let intentos = 0;



// 4. Mostramos los guiones para la palabra a adivinar
//join() -> nos permite definir cómo queremos separar los elementos dentro de un arrego
adivinarPalabra.textContent = guionesPorPalabra.join(' ');



// 5. Evento click
//addEventListener -> nos permite escuchar eventos de elemento
btnLetra.addEventListener('click', verificarLetra);

// 6. Función verificar letras
function verificarLetra(){
    const letra = inputLetra.value;

    //.trim() -> me quita los espacios vacíos antes y después de una cadena de texto, verifique que no esté vacío
    //.match() -> verifica que lo que haya en una palabra o caracter pertenezca o coincida con una condición dada
    if(letra.trim() !== '' && letra.length === 1 && letra.match(/[a-zA-Z]/)){
        
        //verificar(use un condicional) que la letra coincida con las letras del arreglo -> las letras del arreglo etán en palabraRandom
        //.includes() -> verifica si letra está incluída en palabraRandom
        if(palabraRandom.includes(letra)){
            
            //mostrar la letra en los guiones
            for(let i = 0; i < palabraRandom.length; i++){
                //verificamos en dónde específicamente está la letra 
                // = -> asignación - a = 3 -> console.log(a) -> 3
                // == , === -> comparando - a == 2 -> console.log(a) -> false
                if(palabraRandom[i] === letra){
                    guionesPorPalabra[i] = letra;
                }
            }
            adivinarPalabra.textContent = guionesPorPalabra.join(' ');
            //vaciamos los inputs
            document.getElementById('letra').value = '';

            //verificar si no hay guiones libres
            //estamos negando la condicion (incluye _ en guionesPorPalabra)
            if(!guionesPorPalabra.includes('_')){
                alert('Felicitaciones, has ganado!')
            }
            
        } else{
            //si la letra ingresada no está en mi palabra aleatoria

            //1. me muestra un mensaje de que no coinciden
            alert('La letra ingresada no coincide!');
            //2. aumentar los intentos, porque ya probé una letra
            intentos++;
            //3. me va a dibujar el muñequito, llamando la función necesaria para eso
            dibujarMuñequito();
            //vaciamos los inputs
            document.getElementById('letra').value = '';
        }


    } else{
        console.log('error! ingrese una letra válida')
        
    }

}


//Función que dibuja el hombrecito 
function dibujarMuñequito(){
    if (intentos === 1) {
        dibujito.textContent = '  O  ';
    } else if (intentos === 2) {
        dibujito.innerHTML = '  O  <br>  |  ';
    } else if (intentos === 3) {
        dibujito.innerHTML = '  O  <br> /|  ';
    } else if (intentos === 4) {
        dibujito.innerHTML = '  O  <br> /|\\ ';
    } else if (intentos === 5) {
        dibujito.innerHTML = '  O  <br> /|\\ <br> /   ';
    } else if (intentos === 6) {
        dibujito.innerHTML = '  O  <br> /|\\ <br> / \\ ';
        alert('¡Has perdido! La palabra era ' + palabraRandom);
    }
}