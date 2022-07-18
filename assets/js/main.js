var um = '1'
var dois = '2'
var tres = '3'
var quatro = '4'
var cinco = '5'
var seis = '6'
var sete = '7'
var oito = '8'
var nove = '9'
var zero = '0'
var mais = '+'
var menos = '-'
var vezes = '*'
var divisao = '/'
var inputContent = ''

var input = document.getElementById('textOrResult')

function btnUm(){
    inputContent += um
    input.value = inputContent
}
function btnDois(){
    inputContent += dois
    input.value = inputContent
}
function btnTres(){
    inputContent += tres
    input.value = inputContent
}
function btnQuatro(){
    inputContent += quatro
    input.value = inputContent
}
function btnCinco(){
    inputContent += cinco
    input.value = inputContent
}
function btnSeis(){
    inputContent += seis
    input.value = inputContent
}
function btnSete(){
    inputContent += sete
    input.value = inputContent
}
function btnOito(){
    inputContent += oito
    input.value = inputContent
}
function btnNove(){
    inputContent += nove
    input.value = inputContent
}
function btnZero(){
    inputContent += zero
    input.value = inputContent
}
function btnMais(){
    inputContent += mais
    input.value = inputContent
}
function btnMenos(){
    inputContent += menos
    input.value = inputContent
}
function btnVezes(){
    inputContent += vezes
    input.value = inputContent
}
function btnDivisao(){
    inputContent += divisao
    input.value = inputContent
}
function btnLimpar(){
    input.value = ''
    inputContent = ''
}
function btnIgual(){
    if(input.value === ''){

    }else{
        const result = eval(inputContent)
        input.value = result
        inputContent = result
    }
}