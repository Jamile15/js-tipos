//parametros de função 




            //parametro que a função recebe
function soma(numero1, numero2) {
    //o que você quer fazer
    return numero1 + numero2
}
                //valor que quer que soma
console.log(soma(2, 2))

//parametro x argumento 
// ordem parametro : fique a tento na hordem que declara os parametros para não inverter o resultado

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}


console.log(nomeIdade("juliana ", 40))

//pasando função como parametro

function multiplica(num1, num2){
    return num1 * num2
}
//passei a soma 3,3 como primeiro paramero e a soma 1,1 como segundo ai a 
//multiplicação vai ser feita com o resultado de 3+3 e o resultado de 1+1 que vai dar 12
console.log(multiplica(soma(3,3), soma(1,1)))