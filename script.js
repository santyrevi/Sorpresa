onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

// Texto que se mostrará
const messageText = "Feliz graduación a la más bonita e inteligente diseñadora gráfica \nTe Quiero Mucho";

// Elemento donde se insertará el texto
const messageElement = document.getElementById("message");

let index = 0;

function typeWriter() {
  if (index < messageText.length) {
    messageElement.innerHTML += messageText.charAt(index);
    index++;
    setTimeout(typeWriter, 60); // Velocidad de escritura
  }
}

window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    typeWriter(); // Iniciar efecto de máquina de escribir
  }, 1000);
};
