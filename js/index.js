$(document).ready(()=>{

})


var zonaUno = ["CABA"]
var zonaDos = ["San Isidro", "Martinez", "Vicente Lopez", "Olivos"]
var zonaTres = ["Nordelta", "Tigre", "San Fernando", "El Talar", "General Pacheco"]
var zonaCuatro = ["La Lonja", "Pilar Centro", "Ingeniero Maschwitz", "Escobar"]


var costo200Pesos = "El costo es de $200." //el resultado me da 0
var costo260Pesos = "El costo es de $260." // el resultado me da 1
var costo310Pesos = "El costo es de $310." // el resultado me da 2
var costo340Pesos = "El costo es de $340." // el resultado me da 3


function Localidades(localidadRetiro, localidadEntrega){
    this.localidadRetiro = localidadRetiro
    this.localidadEntrega = localidadEntrega
}


function ValoresParaRetiro(valorRetiro){
    this.valorRetiro = valorRetiro
}

function ValoresParaEntrega(valorEntrega){
    this.valorEntrega = valorEntrega
}



//Tomo los datos del HTML
function tomarDatos(){

    var localidadRetiro = document.getElementById("localidadUno").value
    var localidadEntrega = document.getElementById("localidadDos").value

    var envio = new Localidades(localidadRetiro, localidadEntrega)

    return envio

}



var calculo
function cotizacion(valoresParaRetiro, valoresParaEntrega){
       calculo = valoresParaRetiro.valorRetiro - valoresParaEntrega.valorEntrega
       return calculo
    } 


function expresion() {
    switch (calculo) {
        case 0: document.getElementById("devolucionCotizacion").innerHTML = costo200Pesos
            break;
            
        case 1: document.getElementById("devolucionCotizacion").innerHTML = costo260Pesos  
            break;

        case -1: document.getElementById("devolucionCotizacion").innerHTML = costo260Pesos
            break;

        case 2: document.getElementById("devolucionCotizacion").innerHTML = costo310Pesos
            break;

        case -2: document.getElementById("devolucionCotizacion").innerHTML = costo310Pesos
            break;

        case 3: document.getElementById("devolucionCotizacion").innerHTML = costo340Pesos
            break;

        case -3: document.getElementById("devolucionCotizacion").innerHTML = costo340Pesos
            break;
            
        }
    }

function mostrarCuadroCotizacion(){
    $("#devolucionCotizacion").show()
}

function mostrarSolicitarEnvio(){
    $("#solicitarEnvio").show()
}

function mostrarFormulario(){
    $("#formulario").show()
}

function mostrarConfirmacionFinal(){
    $("#confirmacionFinal").show()
}




// Funcion con los retiros
function deQueZonaEsElRetiro(localidades){
switch (localidades.localidadRetiro) {
    case "CABA": var retiroValorUno = 1 
    var retiro = new ValoresParaRetiro(retiroValorUno)
        
        break;
    case "San Isidro": var retiroValorDos = 2
    var retiro = new ValoresParaRetiro(retiroValorDos)
        
        break;
    case "Martinez": var retiroValorDos = 2
    var retiro = new ValoresParaRetiro(retiroValorDos)
        
        break;
    case "Vicente Lopez": var retiroValorDos = 2
    var retiro = new ValoresParaRetiro(retiroValorDos)
        
        break;
    case "Olivos": var retiroValorDos = 2
    var retiro = new ValoresParaRetiro(retiroValorDos)
        
        break;
    case "Nordelta": var retiroValorTres = 3
    var retiro = new ValoresParaRetiro(retiroValorTres)
        
        break;
    case "Tigre": var retiroValorTres = 3
    var retiro = new ValoresParaRetiro(retiroValorTres)
        
        break;
    case "San Fernando": var retiroValorTres = 3
    var retiro = new ValoresParaRetiro(retiroValorTres)
        
        break;
    case "El Talar": var retiroValorTres = 3
    var retiro = new ValoresParaRetiro(retiroValorTres)
        
        break;
    case "General Pacheco": var retiroValorTres = 3
    var retiro = new ValoresParaRetiro(retiroValorTres)
        
        break;
    case "La Lonja": var retiroValorCuatro = 4
    var retiro = new ValoresParaRetiro(retiroValorCuatro)
        
        break;
    case "Pilar Centro": var retiroValorCuatro = 4
    var retiro = new ValoresParaRetiro(retiroValorCuatro)
        
        break;
    case "Ingeniero Maschwitz": var retiroValorCuatro = 4
    var retiro = new ValoresParaRetiro(retiroValorCuatro)
        
        break;
    case "Escobar": var retiroValorCuatro = 4
    var retiro = new ValoresParaRetiro(retiroValorCuatro)
        
        break;
        
    default: alert ("Todavía no llegamos a esa localidad :(")
        break;
}   return retiro
    }


// Funcion con las entregas
function deQueZonaEsLaEntrega(localidades){
    switch (localidades.localidadEntrega) {
        case "CABA": var entregaValorUno = 1 
        var entrega = new ValoresParaEntrega(entregaValorUno)
            
            break;
        case "San Isidro": var entregaValorDos = 2
        var entrega = new ValoresParaEntrega(entregaValorDos)
            
            break;
        case "Martinez": var entregaValorDos = 2
        var entrega = new ValoresParaEntrega(entregaValorDos)
            
            break;
        case "Vicente Lopez": var entregaValorDos = 2
        var entrega = new ValoresParaEntrega(entregaValorDos)
            
            break;
        case "Olivos": var entregaValorDos = 2
        var entrega = new ValoresParaEntrega(entregaValorDos)
            
            break;
        case "Nordelta": var entregaValorTres = 3
        var entrega = new ValoresParaEntrega(entregaValorTres)
            
            break;
        case "Tigre": var entregaValorTres = 3
        var entrega = new ValoresParaEntrega(entregaValorTres)
            
            break;
        case "San Fernando": var entregaValorTres = 3
        var entrega = new ValoresParaEntrega(entregaValorTres)
            
            break;
        case "El Talar": var entregaValorTres = 3
        var entrega = new ValoresParaEntrega(entregaValorTres)
            
            break;
        case "General Pacheco": var entregaValorTres = 3
        var entrega = new ValoresParaEntrega(entregaValorTres)
            
            break;
        case "La Lonja": var entregaValorCuatro = 4
        var entrega = new ValoresParaEntrega(entregaValorCuatro)
            
            break;
        case "Pilar Centro": var entregaValorCuatro = 4
        var entrega = new ValoresParaEntrega(entregaValorCuatro)
            
            break;
        case "Ingeniero Maschwitz": var entregaValorCuatro = 4
        var entrega = new ValoresParaEntrega(entregaValorCuatro)
            
            break;
        case "Escobar": var entregaValorCuatro = 4
        var entrega = new ValoresParaEntrega(entregaValorCuatro)
            
            break;
            
        default: alert ("Todavía no llegamos a esa localidad :(")
            break;
    }   return entrega
        }




//Zona uno
function retiroCorrespondeAZonaUno(){
            var retiroValorUno = 1
            var retiroZ1 = new ValoresParaRetiro(retiroValorUno)
            return retiroZ1
        } 
     
function entregaCorrespondeAZonaUno(){
                
            var entregaValorUno = 1
            var entregaZ1 = new ValoresParaEntrega(entregaValorUno)
            return entregaZ1
        }

//Zona 2
function retiroCorrespondeAZonaDos(){
            var retiroValorDos = 2
            var retiroZ2 = new ValoresParaRetiro(retiroValorDos)
            return retiroZ2
        }


function entregaCorrespondeAZonaDos(){
            var entregaValorDos = 2
            var entregaZ2 = new ValoresParaEntrega(entregaValorDos)
            return entregaZ2
        }

//Zona 3

function retiroCorrespondeAZonaTres(){
            var retiroValorTres = 3
            var retiroZ3 = new ValoresParaRetiro(retiroValorTres)
            return retiroZ3
        }

function entregaCorrespondeAZonaTres(){
            var entregaValorTres = 3
            var entregaZ3 = new ValoresParaEntrega(entregaValorTres)
            return entregaZ3
        }

//Zona 4

function retiroCorrespondeAZonaCuatro(localidades){
            var retiroValorCuatro = 4
            var retiroZ4 = new ValoresParaRetiro(retiroValorCuatro)
            return retiroZ4
        }

function entregaCorrespondeAZonaCuatro(localidades){
            var entregaValorCuatro = 4
            var entregaZ4 = new ValoresParaEntrega(entregaValorCuatro)
            return entregaZ4
        }






//FUNCION FINAL QUE SE EJECUTA CON EL BOTON DE HTML PARA COTIZAR EL ENVIO

function calculoFinal(){
    debugger

    envio_1 = tomarDatos()
    retiro = deQueZonaEsElRetiro(envio_1)
    entrega = deQueZonaEsLaEntrega(envio_1)
    cotizacion(retiro, entrega)
    mostrarCuadroCotizacion()
    expresion()
    mostrarSolicitarEnvio()
    
 }


