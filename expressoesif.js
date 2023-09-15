//uma forma diferente de escrever função

//forma padrão 

//function nomefunção(paramero) {
    // bloco de codigo com o que ela faz
//}

// chama a função passando o valor do parametro


// segunda forma de escrever função diferente  chamda de expressão de função 
// diferenã padrão x expressão de função normalmente função expressão não tem nome a const que tem nome


//const soma = function( nun1, num2){
 //   return nun1 + num2;
//}

//console.log(soma(2,2))

// a principal diferença é que quando declaramos uma função com const eu naõ posso chamar ela antes da declaração dela
// por isso sempre se declara função e variaveis no tomo do codigo

console.log(apresentar())

function apresentar() {
    return "ola"
}

console.log(soma(1,2))
const soma = function( nun1, num2){
    return nun1 + num2;
}

