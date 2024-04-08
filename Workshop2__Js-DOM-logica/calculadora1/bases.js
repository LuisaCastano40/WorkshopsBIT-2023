// Numéricos
let numero = 7; // Se asigna el valor numérico 7 a la variable "numero"

// Cadena de caracteres (String)
let texto = "Hola, mundo!"; // Se asigna la cadena de caracteres "Hola, mundo!" a la variable "texto"

// Booleanos
let esVerdadero = true; // Se asigna el valor booleano true (verdadero) a la variable "esVerdadero"

// Arreglos
let arreglo = [1, 2, 3, 4, 5]; // Se crea un arreglo con los números del 1 al 5

// Objetos
let persona = { // Se crea un objeto llamado "persona" con propiedades como nombre, edad y género
  nombre: "Juan",
  edad: 30,
  genero: "masculino"
};

// Undefined
let variableNoDefinida; // Se declara una variable "variableNoDefinida" sin asignarle un valor, lo que la hace undefined

// Null
let valorNulo = null; // Se asigna el valor null a la variable "valorNulo", que indica explícitamente la ausencia de valor


//1.) Verifica si es mayor de edad
// Ejemplo condicionales

let edad = prompt("Por favor, ingresa tu edad:");

if (edad >= 18) {
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

/*
2.) Mostrar números:
Escribe un programa que use un bucle for para imprimir los números del 1 al 5 en la consola.
*/
// Ejemplo ciclos - hacerlo al revés
for (let i = 0; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

//3) Escribe un programa que use un bucle for para imprimir los números del 1 al 10 y los almacene en un array

let arrayNumeros = [];

for(let i = 0; i <= 10; i++){
    arrayNumeros.push(i);
    console.log("El arreglo de datos es: "+ arrayNumeros);
}

console.log("El arreglo de datos es: "+ arrayNumeros);

// Ejemplo Dom
// <p id="parrafo">Este es un párrafo.</p>
// let parrafo = document.getElementById("parrafo");
// parrafo.textContent = "Este es un nuevo párrafo.";