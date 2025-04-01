// Declaracoes e variaveis

var nome = "Fiap";
console.log (nome)

let idade = 19;
console.log (idade)

const sobrenome = "Balbino";
console.log(sobrenome)

let aula;
console.log(aula)

let valor = null;
console.log(valor)

let exemplo={};

let exemplo2=[];

// alert("Morra")

let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4 = "Aula";
console.log(typeof exemplo4)

let exemplo5 = true;
console.log(typeof exemplo5)

let exemplo6 = ["um", "dois", "tres"];
console.log(typeof exemplo6)

// CONVERSOES

// float > inteiro 
let numFloat = 123.123;
console.log(parseInt(numFloat));

let numString = "345.345";
console.log(parseFloat(numString));

numFloat = parseInt(numFloat);
console.log(numFloat)

let numFloat1 = 566.565;
console.log(numFloat1.toString());

let numInt = 100;
numInt = numInt.toString();
console.log(numInt);

// Metodos - PARTE 1
// length - verifica o tamanho da string

let frase = "O mundo dá voltas";
console.log(frase.length)

// indexOf - retorna um trecho de um texto
let texto = "Bom dia, dsascsaafaaerr3  ae a f";
console.log(texto.indexOf(" "))

// slice - retorna parte de um texto apontando o 
let info="processamento de ponta";
console.log(info.slice(1,3))

// aporadores aritmeticos
const str = "qw32"
const num1=10
const num2=23;

 console.log(num1 + num2);
 console.log(num1 - num2);
 console.log(num1 * num2);
 console.log(num1 / num2);

// operadores logicos

const num3 = 20;
const num4 = 30;

console.log(num3 < num4);
console.log(num3 < num4 && num4 < 50);
console.log(num3 < num4 || num4 < 50);
console.log(num3 == num4);
console.log(num3 >= num4);