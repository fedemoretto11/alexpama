const fechaObjetivo = new Date("02/11/2023 22:00:00")

// VARIABLES MENU RESPONSIVO
const hamb = document.querySelector(".menu-desplegable");
const menu = document.querySelector(".toggle");
const principal = document.querySelector(".seccion-principal");

// VARIABLES CAMBIO DE FONDO
var fotos = ["imagenes/batucada-1.jpg", "imagenes/rojo-1.jpg", "imagenes/varios.jpg"] ;
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


// Despliege de menu responsivo 

function desplegarMenu () {
    menu.classList.toggle("hide")
    hamb.classList.toggle("cross")
}

// Cambio de fondo 

function cambiarFondo() {
    console.log("hola")

    principal.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${fotos[index]})`;

    index++

    if (index == 3) {
        index = 0}
        

}


function hola () {
    console.log("hola")
}

hamb.addEventListener("click", desplegarMenu);

setInterval(cambiarFondo,3000);


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
setInterval(setDate,1000);




