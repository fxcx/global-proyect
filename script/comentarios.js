const nuevoComentario = () => {
    let li = document.createElement("li");
    let valorIngresado = document.getElementById("nuevoComentario").Value;
    let text = document.createTextNode(valorIngresado);
    li.appendChild(text);

    if(valorIngresado === ''){
        alert('ingresar comentario')
    }
    document.getElementById('comentarios').appendChild(li);
}

document.getElementById('nuevoComentario').Value = '';
li.className = "cometario"

let borrar = document.createElement('p');