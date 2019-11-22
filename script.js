
let titulo = document.querySelector("h1")  
let cuadrados = document.querySelectorAll(".cuadro")
let cuadroPerdedor = ""
let bienMal = document.querySelector("#bienMal")
let jugarDeNuevo = document.querySelector("#jugarDeNuevo")

coloresTodosCuadrados()


jugarDeNuevo.addEventListener("click", coloresTodosCuadrados)