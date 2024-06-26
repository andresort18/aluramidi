function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play(); // seleccionamos el sonido y el .play para reproducirlo
 }
                                                                    
// document.querySelector('.tecla_pom').onclick = playSonidoPom; // Seleccionamos objeto por objeto


const listaDeTeclas = document.querySelectorAll('.tecla'); // Esto nos selecciona todos los elementos con ese nombre de clase
for (let contador = 0; contador < listaDeTeclas.length; contador++){

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function(){
    playSonido(idAudio);

  };
  tecla.onkeydown = function(evento){// es cuando apachamos la tecla
    if (evento.code === 'Space' || evento.code === 'Enter' ){ 
      tecla.classList.add('activa');
      console.log(evento.code ==='Space');
  };
  tecla.onkeyup = function(){ // es cuando desapachamos esa tecla
    tecla.classList.remove('activa');
  }

}}
