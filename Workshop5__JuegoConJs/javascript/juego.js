// Creamos un arreglo para almacenar nuestras palabras
// Pondremos un mismo tipo - todas son animales
const palabras = ['abeja', 'zebra', 'loro', 'ardilla', 'gaviota', 'conejo', 'tigre', 'elefante'];

// Traemos elementos del html
const adivinarPalabra = document.getElementById('adivinarPalabra');
const dibujito = document.getElementById('ahorcado');
const btnLetra = document.getElementById('btn-letra');

// Se elige una palabra al azar
let randomIndex = Math.floor(Math.random() * palabras.length);
let palabraRandom = palabras[randomIndex];
let guionesPorPalabra = Array(palabraRandom.length).fill('_');
let intentos = 0;

// Mostramos los guiones para la palabra a adivinar
adivinarPalabra.textContent = guionesPorPalabra.join(' ');

// Evento click
btnLetra.addEventListener('click', verificarLetra);

// Función verificar letras
function verificarLetra() {
    const letra = document.getElementById('letra').value;

    // Quitamos espacios en el input, verificamos que sólo sea una letra y que sea del alfabeto
    if (letra.trim() !== '' && letra.length === 1 && letra.match(/[a-zA-Z]/)) {
        if (palabraRandom.includes(letra)) {
            for (let i = 0; i < palabraRandom.length; i++) {
                if (palabraRandom[i] === letra) {
                    guionesPorPalabra[i] = letra;
                }
            }
            adivinarPalabra.textContent = guionesPorPalabra.join(' ');
            document.getElementById('letra').value = '';

            //identificar cuándo no hay guiones
            if (!guionesPorPalabra.includes('_')) {
                alert('¡Has ganado!');
            }

        } else {
            alert('¡La letra ingresada no está en la palabra!');
            intentos++;
            dibujarMuñequito();
            document.getElementById('letra').value = '';
        }
    } else {
        alert('Ingrese una letra del alfabeto');
    }
}


//Función que dibuja el hombresito 
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