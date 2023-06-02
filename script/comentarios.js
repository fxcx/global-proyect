// elementos del DOM
const inputComentario = document.getElementById("nuevoComentario");
const btnComentar = document.querySelector(".btn-comentarios button");
const listaComentarios = document.getElementById("comentarios");

// Función comentario
const agregarComentario = () => {
  const valorIngresado = inputComentario.value;

  if (valorIngresado === "") {
    alert("escriba un comentario");
    return;
  }

  const li = document.createElement("li");
  li.textContent = valorIngresado;
  li.classList.add("comentario");

  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Borrar";
  botonBorrar.classList.add("close");
  botonBorrar.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botonBorrar);
  listaComentarios.appendChild(li);

  inputComentario.value = "";

  li.appendChild();
  listaComentarios.appendChild(li);

  inputComentario.value = "";
};

// evento de clic al botón de comentar
btnComentar.addEventListener("click", agregarComentario);
