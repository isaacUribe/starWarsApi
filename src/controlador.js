import { buscarStarShips } from "../services/perdirStarships.js";
import { buscarPlanetas } from "../services/pedirPlanetas.js";

let fila1 = document.getElementById("fila1")

buscarStarShips().then(function(respuesta){

    respuesta.results.forEach(function(nave){
        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.id = "tarjeta1"
        tarjeta.classList.add("card", "h-100" ,"shadow")

        let img = document.createElement("img")
        img.src = "../assets/img/starships/imagen1.jpg"

        let name = document.createElement("h3")
        name.classList.add("card-title")
        name.innerHTML = nave.name

        let model = document.createElement("h5")
        model.classList.add("card-subtitle")
        model.innerHTML = nave.model

        let manufacturer = document.createElement("p")
        manufacturer.innerHTML = nave.manufacturer

        let pasajeros = document.createElement("p")
        pasajeros.innerHTML = ( "Cantidad Pasajeros: " +  nave.passengers)

        let carga = document.createElement("p")
        carga.innerHTML = ("Capacidad de carga: " + nave.cargo_capacity)

        fila1.appendChild(columna)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(img)
        tarjeta.appendChild(name)
        tarjeta.appendChild(model)
        tarjeta.appendChild(manufacturer)
        tarjeta.appendChild(pasajeros)
        tarjeta.appendChild(carga)
        
    })

    // console.log(respuesta);
})

let fila2 = document.getElementById("fila2")
buscarPlanetas().then(function(respuesta){
    respuesta.results.forEach(function(planeta){

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.id = "tarjeta2"
        tarjeta.classList.add("card", "h-100", "shadow")

        let img = document.createElement("img")
        img.src = "../assets/img/planetas/imagen2.jpg"

        let name = document.createElement("h3")
        name.classList.add("card-title")
        name.innerHTML= planeta.name

        let diametro = document.createElement("p")
        diametro.innerHTML = ("Diameter: " + planeta.diameter)

        let clima = document.createElement("p")
        clima.innerHTML = ("Clima: " + planeta.climate)

        let gravedad = document.createElement("p")
        gravedad.innerHTML = ("Gravedad: " + planeta.gravity)

        let terreno = document.createElement("p")
        terreno.innerHTML = ("Terreno: " +  planeta.terrain)

        fila2.appendChild(columna)
        columna.appendChild(tarjeta)
        tarjeta.appendChild(img)
        tarjeta.appendChild(name)
        tarjeta.appendChild(diametro)
        tarjeta.appendChild(clima)
        tarjeta.appendChild(gravedad)
        tarjeta.appendChild(terreno)


        console.log(planeta);
    })
})