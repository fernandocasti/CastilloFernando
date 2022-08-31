const dateTiempo =  luxon.DateTime;
const hora = document.querySelector("#hora");
let fecha = dateTiempo.now().toLocaleString();
hora.innerHTML = fecha;