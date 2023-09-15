//erowFunction terceira forma de escrever função 
function apresentar (nome) {
    return `"meu nome é ${nome}`
}
const  apresentarErrow = nome => `meu nome é ${nome}`;

console.log(apresentarErrow("jamile"))

//const soma = (num1, num2) => num1 + num2;

// errow functiom com mais de uma linha mais de um retorno

const somaNumPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return "Somente números de 1 a 9 são permitidos.";
    } else {
        return num1 + num2;
    }
}

console.log(somaNumPequenos(2, 2));
