const fechaObjetivo = new Date("02/11/2023 23:00:00")
const principal = document.querySelector(".seccion-principal");

// VARIABLES CAMBIO DE FONDO
var fotos = ["imagenes/verde-1.jpg", "imagenes/rojo-1.jpg", "imagenes/varios.jpg","imagenes/viejas-epocas.jpg","imagenes/batucada-1.jpg"] ;
var index = 0;

// VARIABLES CUENTA REGRESIVA
const dias = document.querySelector(".cuenta-regresiva-item-dias");
const horas = document.querySelector(".cuenta-regresiva-horas");
const minutos = document.querySelector(".cuenta-regresiva-minutos");
const segundos = document.querySelector(".cuenta-regresiva-segundos");
const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAnHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAnHour * 24;

// Cambio de fondo 

function cambiarFondo() {
    principal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${fotos[index]})`;
    index++
    if (index == 5) {index = 0}   
}


// Cuenta regresiva


function setDate() {
    const now = new Date()
    const duration = fechaObjetivo - now

    const diasRestantes = Math.floor(duration / milisecondsOfADay);
    const horasRestantes = Math.floor((duration % milisecondsOfADay) / milisecondsOfAnHour);
    const minutosRestantes = Math.floor((duration % milisecondsOfAnHour) / milisecondsOfAMinute);
    const segundosRestantes = Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond);

    dias.textContent = diasRestantes;
    horas.textContent = horasRestantes;
    minutos.textContent = minutosRestantes;
    segundos.textContent = segundosRestantes;
}




setInterval(cambiarFondo,3000);
setInterval(setDate,1000);




