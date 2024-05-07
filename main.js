function playSonido (idElementoAudio){
    document.querySelector(idElementoAudio).play(); // seleccionamos el sonido y el .play para reproducirlo
 }
                                                                    
// document.querySelector('.tecla_pom').onclick = playSonidoPom; // Seleccionamos objeto por objeto


const listaDeTeclas = document.querySelectorAll('.tecla'); // Esto nos selecciona todos los elementos con ese nombre de clase

var contador = 0;

while (contador < 9){
    const instrumento = listaDeTeclas[contador].classList[1];
    console.log(instrumento);
    listaDeTeclas[contador].onclick = function(){
      playSonido(instrumento);
    }
    contador = contador + 1;
    console.log('vuelta' + contador);
}
