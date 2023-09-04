//var costuma da bug

/*var altura = 5;
var comprimento = 7;

area = altura * comprimento

console.log(area)

var area;*/

// variavel let aceita mudar os valores
/*let forma = "retangulo"
 let altura = 5;
 let comprimento =  7;
 let area;
 
 if (forma === "retangulo"){
    area = altura * comprimento
 } else{
    area = (altura * comprimento) / 2
 }
 
  console.log(area)*/

//variavel const não deixa mudar o valor dela

const forma = "quadrado"
const altura = 5;
const comprimento = 7;
let area;

if (forma === "triangulo") {
    area = altura * comprimento
} else {
    area = (altura * comprimento) / 2

}


console.log(area)
