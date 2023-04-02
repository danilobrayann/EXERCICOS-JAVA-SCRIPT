
// valor raiz

function vvalorResultado ( ) {

 let  raiz =   (document.getElementById("digiteseuvalorraiz").value)

  
     document.getElementById("resultadodaraiz ").value = raiz + Math.sqrt( )
    
}








// valor multiplo

function valorResultado1( ) {

    let valor1 =  parseInt (document.getElementById("multiplique1").value)
    let valor2 =  parseInt (document.getElementById("multiplique2").value)

   const numeros = valor1 * valor2
   
   document.getElementById("resultadomultiplique3").value = numeros
    
}
// reset
function valorReset1( ) {

    document.getElementById("multiplique1"). value = ""
    document.getElementById("multiplique2"). value = ""
    document.getElementById("resultadomultiplique3"). value = ""
    
}




// valor divisão

function valorResultado2 ( ) {
    let valor3 = document.getElementById("divisao1").value
    let valor4 = document.getElementById("divisao2").value
    const dividendo = valor3 / valor4
    document.getElementById("resultadodadivisao").value = dividendo
    
}

// reset

function valorReset2( ) {
    document.getElementById("divisao1").value =""
    document.getElementById("divisao2").value =""
    document.getElementById("resultadodadivisao").value =""
    
}