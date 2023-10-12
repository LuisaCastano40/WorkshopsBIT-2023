//Traemos los elementos del html mediante manejo de DOM

//querySelector -> puedo llamar cualquier elemento del html (#identifiacdores, .clase, etiquetas)
const btnMenu = document.querySelector('#menu');

//getElementsByClassName -> me trae todos los elementos con una misma clase, la variable se comporta como arreglo
const desplegable = document.getElementsByClassName('desplegable')[0];

//getElementById -> me trae cualquier elemento del html con un identificador
const contenedorBaner = document.getElementById('banner');
const navBar = document.getElementById('navbar-list');

//querySelector -> puedo llamar cualquier elemento del html (#identifiacdores, .clase, etiquetas)
const contenedorImg = document.querySelector('.container-imgs');

//Me trae todos los elementos con un mismo #identificador, .clase o etiqueta - la variable se comporta como arreglo
const elementosEnUl = document.querySelectorAll('#navbar-list li');
const close = document.querySelector('.close');


//Escuchamos eventos

//mouseover -> escucha cuando el mouse pasa sobre un elemento
btnMenu.addEventListener('mouseover', verDesplegable);

//mouseout -> escucha cuando el mouse sale de un elemento
btnMenu.addEventListener('mouseout', esconderDesplegable);

//click -> escucha cuando se da click en un elemento
btnMenu.addEventListener('click', function(){
    contenedorBaner.style.visibility='visible';
    bannerInteractivo();
});
close.addEventListener('click', function(){
    contenedorBaner.style.visibility='hidden';
});


//Funciones declaradas
function verDesplegable(){
    desplegable.style.visibility = 'visible';
}

function esconderDesplegable(){
    desplegable.style.visibility = 'hidden';
}

function bannerInteractivo(){
    //ciclo forEach -> me recorre cada elemento dentro de un arreglo o lista
    elementosEnUl.forEach(elementoLi => {

        //por cada elemento li escuche el evento de pasar el mouse por encima - función anónima
        elementoLi.addEventListener('mouseover', function(){

            //está evaluando el texto en cada elemento li
            switch(elementoLi.textContent){
                //en caso que el texto sea home
            case 'Home':
                    navBar.style.backgroundColor = '#121212';
                    contenedorImg.innerHTML='<img src="assets/img-Negro.jpg" alt="dance"></img>';
                break;
                //en caso que el texto sea about
            case 'About':
                    navBar.style.backgroundColor = '#F2058F';
                    contenedorImg.innerHTML = '<img src="assets/img-Rosa.png" alt="rosa">';
                break;
                //en caso que el texto sea services
            case 'Services':
                    navBar.style.backgroundColor = '#96289C';
                    contenedorImg.innerHTML = '<img src="assets/img-Morado.png" alt="morado">';
                break;
                //en caso que el texto sea team
            case 'Team':
                    navBar.style.backgroundColor = '#0367A6';
                    contenedorImg.innerHTML = '<img src="assets/img-Azul.png" alt="azul">';
                break;
                //en caso que el texto sea contact
            case 'Contact':
                    navBar.style.backgroundColor = '#88A62B';
                    contenedorImg.innerHTML = '<img src="assets/img-Verde.png" alt="verde">';
                break;
            }

        });

    });
}