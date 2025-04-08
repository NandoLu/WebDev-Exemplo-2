// // Declaracoes e variaveis

// var nome = "Fiap";
// console.log (nome)

// let idade = 19;
// console.log (idade)

// const sobrenome = "Balbino";
// console.log(sobrenome)

// let aula;
// console.log(aula)

// let valor = null;
// console.log(valor)

// let exemplo={};

// let exemplo2=[];

// // alert("Morra")

// let exemplo3 = 10;
// console.log(typeof exemplo3)

// let exemplo4 = "Aula";
// console.log(typeof exemplo4)

// let exemplo5 = true;
// console.log(typeof exemplo5)

// let exemplo6 = ["um", "dois", "tres"];
// console.log(typeof exemplo6)

// // CONVERSOES

// // float > inteiro 
// let numFloat = 123.123;
// console.log(parseInt(numFloat));

// let numString = "345.345";
// console.log(parseFloat(numString));

// numFloat = parseInt(numFloat);
// console.log(numFloat)

// let numFloat1 = 566.565;
// console.log(numFloat1.toString());

// let numInt = 100;
// numInt = numInt.toString();
// console.log(numInt);

// // Metodos - PARTE 1
// // length - verifica o tamanho da string

// let frase = "O mundo dá voltas";
// console.log(frase.length)

// // indexOf - retorna um trecho de um texto
// let texto = "Bom dia, dsascsaafaaerr3  ae a f";
// console.log(texto.indexOf(" "))

// // slice - retorna parte de um texto apontando o 
// let info="processamento de ponta";
// console.log(info.slice(1,3))

// // aporadores aritmeticos
// const str = "qw32"
// const num1=10
// const num2=23;

//  console.log(num1 + num2);
//  console.log(num1 - num2);
//  console.log(num1 * num2);
//  console.log(num1 / num2);

// operadores logicos

// let num3 = '20';
// const num4 = 30;

// console.log(num3 < num4);
// console.log(num3 < num4 && num4 < 50);
// console.log(num3 > num4 || num4 > num3);
// console.log(num3 = num3 || num4 > num3);

// OPERADORES DE COMPARAÇÃO

// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6); // compara
// console.log(num5 === num6); // compara o tipo também
// console.log(num5 != num6); // diferente

// ESTRUTURA CONDICIONAL
// if

// let valor = 101;

// if(valor == 100){
// console.log("é verdadeiro")
// }

// // if/else

// let valor1 = 100;

// if(valor1 == 100){
//     console.log("Valor correto")
// }else{
//     console.log("Valor errado")
// }

// if/else - encadeado ou aninhado

// let idade = 69
// if(idade <= 14){
//     console.log("Não pode entrar na balada")
// }else if (idade > 14 && idade < 18){
//     console.log("Pode entrar e curtir")
// }else if (idade > 50 && idade < 70){
//     console.log("Você não tem idade para isso")
// } else{
//     console.log("Fique em casa!")
// }

//condição terraria

// let valor2 =301;

// let resultado = valor2 == 300 ? "Certo":"Errado";
// console.log(resultado)

// let zero = 0
// let verificacao = zero == 0 ? "É zero ": "é não"
// console.log(verificacao)

// switch case

// let time = "Santos";

// switch(time){
//     case "Santos":
//         console.log("melhor time")
//         break;
//     case "Sao Paulo":
//         console.log("Dá demais")
//         break;
//     case "Palmeiras":
//         console.log("Não em Mundial")
//         break;
//     default:
//         console.log("Nenhuma das opções")
// }

// Estrutura de laço de repetição
// declaracao ; operacao ; incremento
// for(let i=0; i<=10; i++){
//     console.log("O valor de I é:", i)
//     console.log("Santos é o maior time da terra")
// }

// WHILE
let w = 0;

while(w<=10){
    console.log("O valor de w é: ", w)
    w++;
}

// do while

let z = 10;

do {
    console.log("Do while é:", z)
    z++;
} while(z <= 100)

