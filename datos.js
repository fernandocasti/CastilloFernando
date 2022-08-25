
/*
localStorage.setItem("usuarios", JSON.stringify(usuarios));

const usuario = JSON.parse(localStorage.getItem("usuarios"));

console.log(usuario);

let nombre = document.getElementById("nombre");
let nombre1 = miformulario.value;

let contra = document.getElementById("contra");
let contra1 = miformulario.value;

console.log(nombre1);*/
   
    /*localStorage.setItem("valor", personas)
    let agregarvalor = localStorage.getItem("valor");
    JSON.stringify(agregarvalor);
    console.log(agregarvalor);
}
    for(const persona of personas){
        console.log(persona[sumarpersonas]);
    }
    sumarpersonas += 1;
    
    if(variablepersonas == undefined){
        console.log("vuelva a intentarlo");
        JSON.stringify(variablepersonas);
    }else if(variablepersonas == JSON.stringify(variablepersonas)){
        console.log("siu");
    }else{
        console.log("esta mejorando");
    }
}


let formulario = localStorage.setItem("datos", document.getElementById("nombre"));
let cambiar = JSON.stringify(formulario);
console.log(cambiar);
formulario.addEventListener("submit", validarFormulario);
    
function validarFormulario (e) {
    e.preventDefault();
    let validarFormulario = e.target;
        console.log(e);
        console.log(validarFormulario);
}*/

const personas = [];
const contadorUsuario = "";

document.getElementById("nombre").value = localStorage.getItem("nombre");

const nombre = document.getElementById("nombre");
const nombreHtml = localStorage.getItem("nombre")

const guardarlocal = () => {
    localStorage.setItem("nombre", document.getElementById("nombre").value );
    console.log("su nombre es: " +nombreHtml);
}

nombre.addEventListener(`change`, guardarlocal)