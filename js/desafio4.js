

// quando eu clicar em inicio o valor aparecer e o resultado e tudo que tiver na minha funcção
function start() {
    let valor1 = parseInt(document.getElementById("numero1").value)
    let valor2 = parseInt(document.getElementById("numero2").value)
    
    if (valor1 === valor2){
    document.getElementById("textoDoResultado").value = "iguais"
}
    else if (valor1 !== valor2) {

        document.getElementById("textoDoResultado").value = "diferente"
    }

}

function reset() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("textoDoResultado").value = ""

}

