function mostarmodal() {
  $('#modalOferta').modal()

  $('#noregistrarse').click(function(ev) {
    localStorage.noMostrarModal = true
  })
}

const $filtrosToggle = $('#filtrosToggle')
$filtrosToggle.click(function(ev) {
  ev.preventDefault()

  const $i = $filtrosToggle.find('i.fa')
  const isDown = $i.hasclass('fa-chevron-down')
  if (isDown) {
    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  } else {
    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
})
