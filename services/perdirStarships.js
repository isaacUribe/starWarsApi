export async function buscarStarShips(){
    const URL = "https://swapi.dev/api/starships"

    const PETICION = {
        method:"GET"
    }
    let respuesta = await fetch(URL, PETICION)
    let starshipsEntregadas = await respuesta.json()
    return starshipsEntregadas
}