$(function () {

  // Tooltips y popovers (Bootstrap 4 los requiere inicializar a mano)
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Velocidad del carousel: cambia de slide cada 3 segundos
  // y la animación de desplazamiento dura 1.2 segundos
  var VELOCIDAD_CAMBIO = 3000;
  var VELOCIDAD_TRANSICION = '1.2s';

  $('#banner').carousel({
    interval: VELOCIDAD_CAMBIO,
    pause: 'hover'
  });
  $('#banner .carousel-item').css('transition', 'transform ' + VELOCIDAD_TRANSICION + ' ease-in-out');

  // Botones para cambiar la velocidad en vivo
  $('[data-velocidad]').on('click', function () {
    var ms = parseInt($(this).data('velocidad'), 10);
    $('#banner').data('bs.carousel')._config.interval = ms;
    $('#banner').carousel('cycle');
    $('[data-velocidad]').removeClass('active');
    $(this).addClass('active');
  });

  // Formulario del modal: valida y muestra una alerta de confirmación
  $('#formRegistro').on('submit', function (e) {
    e.preventDefault();
    var nombre = $('#regNombre').val().trim();
    $('#modalRegistro').modal('hide');
    $('#alertaRegistro').text('¡Gracias, ' + nombre + '! Te escribiremos pronto.').removeClass('d-none');
    this.reset();
    setTimeout(function () { $('#alertaRegistro').addClass('d-none'); }, 5000);
  });

});

// ===== Módulo 4: eventos del modal =====
$(function () {

  var $modal = $('#modalRegistro');
  if (!$modal.length) { return; }

  // Botones que abren el modal (hay uno en el carousel y otro debajo de las cards)
  var $botones = $('[data-toggle="modal"][data-target="#modalRegistro"]');

  // Registra en consola cada uno de los 4 eventos del modal
  $modal.on('show.bs.modal', function () {
    console.log('[modal] show.bs.modal: el modal comienza a abrirse');
    // Se inhabilita el botón y cambia de color (verde -> amarillo)
    $botones.prop('disabled', true)
            .removeClass('btn-accent')
            .addClass('btn-amarillo');
  });

  $modal.on('shown.bs.modal', function () {
    console.log('[modal] shown.bs.modal: el modal terminó de abrirse');
    $('#regNombre').trigger('focus');
  });

  $modal.on('hide.bs.modal', function () {
    console.log('[modal] hide.bs.modal: el modal comienza a ocultarse');
  });

  $modal.on('hidden.bs.modal', function () {
    console.log('[modal] hidden.bs.modal: el modal terminó de ocultarse');
    // Se reactiva el botón y vuelve a su color original
    $botones.prop('disabled', false)
            .removeClass('btn-amarillo')
            .addClass('btn-accent');
  });

});
