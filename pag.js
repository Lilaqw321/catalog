// Obtén todas las imágenes con la clase "zoom"
const images = document.querySelectorAll(".zoom");

// Obtén el modal y sus elementos
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");   
 

// Función para mostrar el modal
const modalFunction = (img) => {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.textContent = img.alt; // Utiliza textContent para evitar problemas con HTML en el pie de foto
}

// Para cada imagen, agrega un evento de clic que llame a la función modalFunction
images.forEach(image => {
  image.addEventListener('click', () => {
    modalFunction(image);
  });
});

// Obtén el elemento de cierre del modal
const span = document.querySelector(".close");

// Cuando se hace clic en el span (x), cierra el modal
span.onclick = () => {
  modal.style.display = "none";
}