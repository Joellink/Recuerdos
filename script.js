document.addEventListener("DOMContentLoaded", function () {


    const boton = document.getElementById("abrir");
    const contenido = document.getElementById("contenido");


    if (boton && contenido) {


        boton.addEventListener("click", function () {


            contenido.classList.remove("oculto");


            window.scrollTo({

                top: contenido.offsetTop,

                behavior: "smooth"

            });


        });


    }



    // Animación de aparición al desplazarse


    const elementos = document.querySelectorAll(".animado");


    const observador = new IntersectionObserver(function (entradas) {


        entradas.forEach(function (entrada) {


            if (entrada.isIntersecting) {


                entrada.target.classList.add("visible");


            }


        });


    }, {

        threshold: 0.20

    });



    elementos.forEach(function (elemento) {


        observador.observe(elemento);


    });



});
