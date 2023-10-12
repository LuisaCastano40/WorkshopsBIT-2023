//Traemos los elementos del html mediante manejo de DOM


const btnMenu = document.querySelector('#menu');
const desplegable = document.getElementsByClassName('desplegable')[0];
const contenedorBaner = document.getElementById('banner');
const navBar = document.getElementById('navbar-list');
const contenedorImg = document.querySelector('.container-imgs');
const elementosEnUl = document.querySelectorAll('#navbar-list li');
const close = document.querySelector('.close');


//Escuchamos eventos

btnMenu.addEventListener('mouseover', verDesplegable);
btnMenu.addEventListener('mouseout', esconderDesplegable);
btnMenu.addEventListener('click', function(){
    contenedorBaner.style.visibility='visible';
    bannerInteractivo();
});
close.addEventListener('click', function(){
    contenedorBaner.style.visibility='hidden';
});


//Funciones
function verDesplegable(){
    desplegable.style.visibility = 'visible';
}

function esconderDesplegable(){
    desplegable.style.visibility = 'hidden';
}

function bannerInteractivo(){
    //ciclo forEach -> me recorre cada elemento dentro de un arreglo o lista
    elementosEnUl.forEach(elementoLi => {

        elementoLi.addEventListener('mouseover', function(){

            switch(elementoLi.textContent){
                case 'Home':
                    navBar.style.backgroundColor = '#121212';
                    contenedorImg.innerHTML='<img src="assets/img-Negro.jpg" alt="dance"></img>';
                break;
            case 'About':
                    navBar.style.backgroundColor = '#F2058F';
                    contenedorImg.innerHTML = '<img src="assets/img-Rosa.png" alt="rosa">';
                break;
            case 'Services':
                    navBar.style.backgroundColor = '#96289C';
                    contenedorImg.innerHTML = '<img src="assets/img-Morado.png" alt="morado">';
                break;
            case 'Team':
                    navBar.style.backgroundColor = '#0367A6';
                    contenedorImg.innerHTML = '<img src="assets/img-Azul.png" alt="azul">';
                break;
            case 'Contact':
                    navBar.style.backgroundColor = '#88A62B';
                    contenedorImg.innerHTML = '<img src="assets/img-Verde.png" alt="verde">';
                break;
            }

        });

    });
}