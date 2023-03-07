// necesito ir a netflix y autenticarme
function procesoUno(nombreUsuario,procesoDos){//declarando
    setTimeout(function(){
        if(nombreUsuario=="admin"){
            procesoDos("Exito",null)//llamando a 2
        }else{
            procesoDos(null,"Falla")//llamando a 2
        }
    },2000)
}

procesoUno("admin", function(resuelvo,rechazo){
    if(resuelvo!=null){
        console.log("bienvenido")
    }else{
        console.log("revisa tus datos")
    }
})//llamando a 1