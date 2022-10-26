const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(event){
  const enlace = event.relatedTarget;
  const rutaImagen = enlace.getAttribute('data-bs-imagen');

  console.log('rutaImagen');

  //construir la imagen
  const imagen = document.createElement('IMG');
  imagen.src = `/build/img/Retratos/${rutaImagen}.jpg`;
  imagen.classList.add('img-fluid');
  imagen.alt = 'imagen galeria';

  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.appendChild(imagen);
});

modalImagen.addEventListener('hide.bs.modal', function() {
  const contenidoModal = document.querySelector('.modal-body');
  contenidoModal.textContent = '';
} );
  