
let generadorColor = function () {  // Genera un RGB random con formato string 

    let colorRandom = "rgb("
    for (let i = 0; i < 3; i++) {
        colorRandom = colorRandom + Math.floor(Math.random() * (256 - 0))
        if (i < 2) {
            colorRandom = colorRandom + ","
        }
    }
    colorRandom = colorRandom + ")"
    return colorRandom
}

let coloresTodosCuadrados = function () // Agrega a cada cuadro un rgb random, y cambia el titulo al rgb que tenes que buscar
{                                       // Agrega el event click a los cuadros
    for (let i = 0; i < 6; i++) {
        cuadrados[i].style.backgroundColor = generadorColor()
    }

    titulo.textContent = cuadrados[(Math.floor(Math.random() * (6 - 0)))].style.backgroundColor.toUpperCase()
    bienMal.hidden = true   // Saca el correcto
    
    for (let i = 0; i < 6; i++)
    cuadrados[i].addEventListener("click", clickFuncion)

    titulo.style.color = "black" // Vuelve a poner negro el RGB del titulo
    jugarDeNuevo.hidden = true // Saca el boton volver a jugar
}

let clickFuncion = function ()  // Verifica si el rgb del titulo coincide con el rgb del cuadro para ver si ganaste o no
{

    if (this.style.backgroundColor.toUpperCase() == titulo.textContent) {
        ganasteFuncion()  
    }
    else {
        this.style.display = "none" // Va eliminando los incorrectos
        
    }
}

let ganasteFuncion = function() // Vuelve a ponerles display a los cuadrados que desaparecieron, les queta el event click, titulo CORRECTO
{                               // Aparece boton empezar de nuevo
    for (let i = 0; i < 6; i++){
        cuadrados[i].style.display = "block"
        cuadrados[i].removeEventListener("click", clickFuncion)
        cuadrados[i].style.backgroundColor = titulo.innerText
        titulo.style.color = titulo.innerText
        bienMal.textContent = "CORRECTO"
        bienMal.hidden = false
        jugarDeNuevo.hidden = false
        jugarDeNuevo.style.backgroundColor = titulo.innerText
    }
}

