var numeroTotal = new String()


function adicionarNumero(numero){
    
    var inputNombre= document.querySelector('#resultado')
    var numeroIntroducido = new String(numero)
    numeroTotal = numeroTotal + numeroIntroducido
    inputNombre.value = numeroTotal
    console.log(numeroTotal)

}