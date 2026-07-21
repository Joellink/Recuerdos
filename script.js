document.addEventListener("DOMContentLoaded", function(){

    const boton = document.getElementById("abrir");
    const contenido = document.getElementById("contenido");


    if(boton){

        boton.addEventListener("click", function(){

            contenido.style.display = "block";

            window.scrollTo({

                top: contenido.offsetTop,

                behavior: "smooth"

            });

        });

    }


});
