//import { cerrarSesion } from "./controllers/controllerUsuarios.js";

window.onload = function() {
      fetch('/src/views/header.html')
      .then(response => response.text())
      .then(data => {
            document.querySelector('header').innerHTML = data;
            let cerrarSesionButton = document.getElementById('cerrarSesion');
            cerrarSesion(cerrarSesionButton)

      })

      fetch('/src/views/footer.html')
      .then(response => response.text())
      .then(data =>{
            document.querySelector('footer').innerHTML = data;
      })
}
