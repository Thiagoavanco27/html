// Crie uma variável com o valor inicial igual a 2148. Esse valor não deve ser alterado.
const variavel = 2148;

// Crie uma segunda variável, dessa vez sem um valor inicial.
let variavel2;

//Imprima na tela a seguinte mensagem: "O valor da primeira variável é $valor",
//substituindo o termo iniciado em $ pelo valor abrigado na sua variável.

console.log(`O valor da primeira variável é ${variavel}`);

//Atribua um valor numérico à segunda variável.
variavel2 = 150;

// Imprima na tela os textos "Minha segunda variável vale $valor" e "o valor da soma
// das minhas duas variáveis é $valor", substituindo o termo $valor pelos valores
// correspondentes.

console.log(`Minha segunda variável vale ${variavel2}`);

// Eleve a sua segunda variável ao quadrado e imprima esse resultado na tela. Após
// isso, divida esse resultado por 3 e coloque-o na tela novamente.

res = variavel2 ** 2;
console.log(res);
console.log(res / 3);

// Crie duas variáveis booleanas de valores iniciais distintos. Imprima na tela o resultado das
// operações AND e OR entre elas. Depois disso, crie uma terceira variável booleana, com o valor
// de sua escolha. Imprima na tela o resultado das operações AND e OR para as três variáveis
// disponíveis

const quarta_feira = true;
const janeiro = false;
console.log(quarta_feira && janeiro);
console.log(quarta_feira || janeiro);
const dezembro = true
console.log(quarta_feira && janeiro && dezembro)
