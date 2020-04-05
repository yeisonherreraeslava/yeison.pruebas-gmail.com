var numeroTotal = new String()
var operadores =[], operadoresAntes=[], operadoresDespues=[]
var inputResultado= document.querySelector('#resultado')
var operacionRealizada = false

function adicionarNumero(numero){
    
    var inputResultadoHistorico= document.querySelector('#resultado-historico')
    var numeroIntroducido = new String(numero)
    
    if (operacionRealizada) {
        inputResultadoHistorico.value=''
        numeroTotal=''
        operadores=[]
        operacionRealizada=false
    }
    
    numeroTotal += numeroIntroducido
    inputResultadoHistorico.value += numeroIntroducido 
    console.log(numeroTotal)

}

function guardarOperacion (operacion){
    var inputResultadoHistorico= document.querySelector('#resultado-historico')
    inputResultadoHistorico.value=''
    if (operacionRealizada===false) {
        operadores.push ( parseFloat (numeroTotal))
    } else{
        operacionRealizada = false
    }
    operadores.push(operacion)
    console.log('aca'+ operadores)
    console.log( operadores)
    numeroTotal = '' 

    for (let index =0 ; index < operadores.length; index++){
        inputResultadoHistorico.value += operadores [index]
    }

}

function ProcesarOperacion(){
    operadores.push ( parseFloat (numeroTotal))
    disminurOperadores('/')
    disminurOperadores('*')
    disminurOperadores('+')
    disminurOperadores('-')
    inputResultado.value = operadores[0]
    operacionRealizada = true

                  

}

function disminurOperadores(operacion){
    var resuldoOperacion
    while (operadores.indexOf(operacion) > 0) {
        index = operadores.indexOf(operacion)
        if (index > 1) {
            operadoresAntes = operadores.slice(0,index-1)
        } else {
            operadoresAntes=[]
        }
        
        if ( index < operadores.length - 1 ) {
            operadoresDespues = operadores.slice(index +2,operadores.length)
        } else {
            operadoresDespues=[]
        }
        switch (operacion) {
            case '/':
                resuldoOperacion = operadores[index-1] / operadores[index+1]
                break;
            case '*':
                resuldoOperacion = operadores[index-1] * operadores[index+1]
                break;
            case '+':
                resuldoOperacion = operadores[index-1] + operadores[index+1]
                break;
            case '-':
                resuldoOperacion = operadores[index-1] - operadores[index+1]
                break;
            default:
                break;
        }
        
        console.log(resuldoOperacion)
        console.log(operadoresAntes)
        console.log(operadoresDespues)
        operadores =[]
        operadores.push(...operadoresAntes)
        operadores.push(resuldoOperacion)
        operadores.push(...operadoresDespues)
        console.log(operadores)
    }
}