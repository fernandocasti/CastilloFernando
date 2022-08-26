
/* ENTIENDO AL OPERADOR I++ COMO OPERACION SUGAR SINTAX Y TAMBIEN CREE EL IF POR LAS DUDAS*/

const personas = [];

document.getElementById("nombre").value = localStorage.getItem("nombre");
document.getElementsByClassName("apellido").value = localStorage.getItem("nombre");
let i = 1;
const nombre = document.getElementById("nombre");
const apellido = document.getElementsByClassName("apellido");
const nombreHtml = localStorage.getItem("nombre");
const apellidoHtml = localStorage.getItem("apellido");
const guardarlocal = () => {
    localStorage.setItem("nombre", document.getElementById("nombre").value );
    localStorage.setItem("apellido", document.getElementsByClassName("apellido").value)
    for(i = 1; i < 2; i++){
        if(nombreHtml+apellidoHtml? console.log(localStorage.getItem("nombre") +" "+localStorage.getItem("apellido")) : console.log("no puedo guardar su nombre"));
}
    
}
nombre.addEventListener(`click`, guardarlocal)
