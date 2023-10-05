// Ejercicio de arreglos

/*
5) Lista de nombres
Escribe un programa que almacene 3 nombres en un array y luego los muestre, si el nombre está repetido, no debe guardarlo.
*/

const listaNombres = [];

while(listaNombres.length < 3){
    let nombre = prompt('Ingrese un nombre a la lista');
    
    if(nombre !== '' && !listaNombres.includes(nombre)){
        listaNombres.push(nombre);
    } else if(nombre === ''){
        alert('Debes ingresar un nombre');
    } else{
        alert('Ese nombre ya está en la lista');
    }
}
if(listaNombres.length === 3){
    alert(`los nombres son ${listaNombres.join(', ')}`);
}
