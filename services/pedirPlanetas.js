export async function buscarPlanetas(){
    const URL = "https://swapi.dev/api/planets"

    const PETICION = {
        method: "GET"
    }
     let respuesta = await fetch(URL, PETICION)
    let planetasEntregados = await respuesta.json()
    return planetasEntregados
}