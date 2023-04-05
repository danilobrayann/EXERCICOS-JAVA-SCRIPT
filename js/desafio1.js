// PROGRAMA QUE SOME 2 NUMEROS

function soma( ) {
let numero1 = parseInt (document.getElementById ("valor1").value);
let numero2 = parseInt (document.getElementById ("valor2").value);

const resultadoaqui = numero1 + numero2; 

document.getElementById("resultado").value = + resultadoaqui;

}

function reset( ) {

    document.getElementById ("valor1").value = ""
    document.getElementById ("valor2").value = ""
    document.getElementById ("resultado").value = ""
   
    
}
