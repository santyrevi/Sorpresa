
document.getElementById("mostrar").addEventListener("click", function () {
  document.getElementById("rosas").classList.remove("oculto");
  document.getElementById("mensaje").classList.remove("oculto");
  this.style.display = "none"; // Oculta el botón
});
