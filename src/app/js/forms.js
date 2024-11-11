// Función para mostrar y ocultar formularios
function mostrarFormulario(idFormulario) {
    // Ocultamos ambos formularios primero
    document.getElementById('contenido-formulario1').style.display = 'none';
    document.getElementById('contenido-formulario2').style.display = 'none';
    // Mostramos solo el formulario que corresponde
    document.getElementById(idFormulario).style.display = 'block';
    
    // fondo enlaces

    let enlace = document.getElementById(idFormulario);  // Se asume que 'idFormulario' es una variable definida

if (enlace.id === 'contenido-formulario1') {
  // Cambiar el fondo de los enlaces con la clase 'fondo-enlace-registro'
  let registros = document.getElementsByClassName('fondo-enlace-registro');
  for (let i = 0; i < registros.length; i++) {
    registros[i].style.backgroundColor = 'white';
  }

  // Cambiar el fondo de los enlaces con la clase 'fondo-enlace-login'
  let logins = document.getElementsByClassName('fondo-enlace-login');
  for (let i = 0; i < logins.length; i++) {
    logins[i].style.backgroundColor = 'rgb(188, 185, 185)';
  }

} else if (enlace.id === 'contenido-formulario2') {
  // Cambiar el fondo de los enlaces con la clase 'fondo-enlace-registro'
  let registros = document.getElementsByClassName('fondo-enlace-registro');
  for (let i = 0; i < registros.length; i++) {
    registros[i].style.backgroundColor = 'rgb(188, 185, 185)';
  }

  // Cambiar el fondo de los enlaces con la clase 'fondo-enlace-login'
  let logins = document.getElementsByClassName('fondo-enlace-login');
  for (let i = 0; i < logins.length; i++) {
    logins[i].style.backgroundColor = 'white';
  }
}
  }
  
  // Mostrar el formulario de registro por defecto al cargar la página
  window.onload = function() {
    mostrarFormulario('contenido-formulario1');
  };