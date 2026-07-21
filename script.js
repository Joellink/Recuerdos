function mostrarCarta(){

    const contenido = document.getElementById("contenido");

    contenido.style.display = "block";

    contenido.scrollIntoView({
        behavior:"smooth"
    });

    document.querySelector(".portada").style.display="none";

}
