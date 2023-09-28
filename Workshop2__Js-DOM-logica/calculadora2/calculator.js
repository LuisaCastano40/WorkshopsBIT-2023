const pantalla = document.getElementById('screen');
const botones = document.querySelectorAll('button');

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    
    pantalla.value += btn.value;

    if (btn.id === '=') {
      pantalla.value = eval(pantalla.value);
    }
    else if (btn.id === 'C') {
      pantalla.value = '';
    }
    else if (btn.id === '%') {
      pantalla.value = parseInt(pantalla.value)/100;
    }
    else if (btn.id === 'DE') {
      pantalla.value = pantalla.value.slice(0,-1);
    }
  })
})
