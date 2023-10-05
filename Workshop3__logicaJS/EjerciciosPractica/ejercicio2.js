// Ejercicios de condicionales
/*
2.) Calculadora de descuento:
Crea un programa que solicite al usuario el precio original de un producto y el porcentaje de descuento que se aplicará. Luego, calcula y muestra el precio final después del descuento. 
*/

const precio = parseFloat(prompt('Ingrese el precio del producto'));
const descuento = prompt('Ingrese 1, 2 o 3 dependiendo del descuento que desee aplicar: \n 1. 10% \n 2. 30% \n 3. 50%');
let precioFinal = 0;

switch(descuento){
    case '1':
        precioFinal = precio - (precio*0.1);
        alert('El precio con descuento es: ' + precioFinal);
        break;
    case '2':
        precioFinal = precio - (precio*0.3);
        alert('El precio con descuento es: ' + precioFinal);
        break;
    case '3':
        precioFinal = precio - (precio*0.5);
        alert('El precio con descuento es: ' + precioFinal);
        break;
}