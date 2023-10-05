// Ejercicios de bucles

/*
4.) Factorial:
Solicita un número al usuario y calcula su factorial.
*/

let numero = parseInt(prompt('Ingrese un número para calcular su factorial'));
let factorial = 1;

for(let i = 1; i <= numero; i++ ){
    factorial *= i;
}

alert(`el factorial es: ${factorial}`);