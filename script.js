// Botón para abrir el recuerdo

const boton = document.getElementById("abrir");
const contenido = document.getElementById("contenido");


boton.addEventListener("click", function(){

    contenido.classList.remove("oculto");

    window.scrollTo({

        top: contenido.offsetTop,

        behavior: "smooth"

    });


});



// Animación al aparecer las secciones

const elementos = document.querySelectorAll(".animado");


const observador = new IntersectionObserver(

(entries)=>{


    entries.forEach((entrada)=>{


        if(entrada.isIntersecting){

            entrada.target.classList.add("visible");

        }


    });


},

{

    threshold:0.2

}

);



elementos.forEach((elemento)=>{

    observador.observe(elemento);

});
