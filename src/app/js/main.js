window.onload = function() {
      fetch('/src/views/header.html')
      .then(response => response.text())
      .then(data => {
            document.querySelector('header').innerHTML = data;
      })

      fetch('/src/views/footer.html')
      .then(response => response.text())
      .then(data =>{
            document.querySelector('footer').innerHTML = data;
      })
}
