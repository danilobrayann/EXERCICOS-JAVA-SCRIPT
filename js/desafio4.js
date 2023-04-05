


function start() {
    let valor1 = parseInt(document.getElementById("numero1").value)
    let valor2 = parseInt(document.getElementById("numero2").value)
    valor1 === valor2
    document.getElementById("textoDoResultado").value = "iguais"

    if (valor1 !== valor2) {

        document.getElementById("textoDoResultado").value = "diferente"
    }

}

function reset() {
    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("textoDoResultado").value = ""

}

