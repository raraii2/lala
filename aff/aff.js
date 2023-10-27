document.addEventListener("DOMContentLoaded", function () {
    const exibirTextoBtn = document.getElementById("exibirTexto");
    const textoExibido = document.getElementById("textoExibido");
  
    exibirTextoBtn.addEventListener("click", function () {
      textoExibido.style.display = "block";
    });
  });
  