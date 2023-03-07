//un callback con cirugia plastica
//una promesa es una funcion asincrona que facilita su escritura a traves
//de 2 calbacks(resolve y reject)

function proceso1(nombreUsuario) {
    let promesa = new Promise(function (resuelvo, rechazo) {
        setTimeout(function () {
            if (nombreUsuario == "admin") {
                resuelvo("exito")
            } else {
                rechazo("falla")
            }
        }, 2000)
    })

    return promesa
}

proceso1("admin")

    .then(function (respuesta) { console.log(respuesta) })//camino de exito
    .catch(function (respuesta) { console.log(respuesta) })//camino de rechazo