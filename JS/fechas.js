const dateTiempo =  luxon.DateTime;
const hora = document.querySelector("#hora");
hora.innerHTML = dateTiempo.now().toLocaleString();