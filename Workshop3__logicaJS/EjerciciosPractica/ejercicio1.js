// Ejercicios de condicionales

/*
1.) Verificación de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano.
*/

const edad = parseInt(prompt('Ingrese su edad'));
const respuestaCiudadano = prompt('¿Eres ciudadano Colombiano? Responde "si" o "no"').toLowerCase();

if (edad >= 18 && respuestaCiudadano === 'si') {
  alert('Eres elegible para votar');
} else {
  alert('No eres elegible para votar');
}






 





