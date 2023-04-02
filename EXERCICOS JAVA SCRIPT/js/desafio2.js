// Faça um programa que multiplique 2 números e o resultado adicione 10
function resul () {  
let numero1 = parseInt (document.getElementById("numero11").value);
let numero2 = parseInt (document.getElementById("numero22").value);
const soma = numero1 * numero2;

document.getElementById ("resultado").value = soma + 10;
}

function reset() {
   
    document.getElementById("numero11").value = ""
    document.getElementById("numero22").value = ""
    document.getElementById("resultado").value = ""
}