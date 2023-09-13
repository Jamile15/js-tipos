

const idadeMinima = 18;
const idadeCliente = 15;

//if classico
if(idadeMinima >= idadeCliente){
    console.log("liberado para beber")
}else{
    console.log("chama o concelho tutelar")
}

//if ternario

console.log(idadeCliente >= idadeMinima ? "liberado para beber" : "chama o concelho tutelar")