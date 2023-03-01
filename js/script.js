// VARIABLES PROXIMA FIESTA
let proximaFiesta = "Fiesta Nacional del Carnaval de la Amistad 2023"
let pieFiesta = "La Fiesta ya comenzo! Te esperamos en Maipu!"
const fechaObjetivo = new Date("02/15/2023 23:00:00")

// VARIABLES CAMBIO DE FONDO
const principal = document.querySelector(".seccion-principal");
var fotos = ["img/verde-1.jpg", "img/rojo-1.jpg", "img/varios.jpg","img/viejas-epocas.jpg","img/batucada-1.jpg"] ;
var index = 0;

// VARIABLES CUENTA REGRESIVA
const titulo = document.querySelector(".titulo-cuenta-regresiva");
const pie = document.querySelector(".pie-cuenta-regresiva");
const dias = document.querySelector(".cuenta-regresiva-item-dias");
const horas = document.querySelector(".cuenta-regresiva-horas");
const minutos = document.querySelector(".cuenta-regresiva-minutos");
const segundos = document.querySelector(".cuenta-regresiva-segundos");
const milisecondsOfASecond = 1000;
const milisecondsOfAMinute = milisecondsOfASecond * 60;
const milisecondsOfAnHour = milisecondsOfAMinute * 60;
const milisecondsOfADay = milisecondsOfAnHour * 24;


// colocacion titulo
titulo.innerHTML = proximaFiesta;
pie.innerHTML = pieFiesta




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

    const diasRestantes = (Math.floor(duration / milisecondsOfADay)).toString().padStart(2,"0");
    const horasRestantes = (Math.floor((duration % milisecondsOfADay) / milisecondsOfAnHour)).toString().padStart(2,"0");
    const minutosRestantes = (Math.floor((duration % milisecondsOfAnHour) / milisecondsOfAMinute)).toString().padStart(2,"0");
    const segundosRestantes = (Math.floor((duration % milisecondsOfAMinute) / milisecondsOfASecond)).toString().padStart(2,"0");

    dias.textContent = diasRestantes <= 0 ? 00.toString().padStart(2,"00") : diasRestantes;
    horas.textContent = horasRestantes <= 0 ? 00.toString().padStart(2,"00") : horasRestantes;
    minutos.textContent = minutosRestantes <= 0 ? 00.toString().padStart(2,"00") : minutosRestantes;
    segundos.textContent = segundosRestantes <= 0 ? 00.toString().padStart(2,"00") : segundosRestantes;
}




setInterval(cambiarFondo,3000);
setInterval(setDate,1000);






