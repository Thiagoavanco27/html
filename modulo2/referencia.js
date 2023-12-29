let valor = null;
console.log(typeof valor);
valor = Array;
console.log(typeof valor);
function amor() {}
console.log(typeof amor);
//dicionario
let S1724 = {
    Produto: "Grampo S-524",
    material: "Aluminio",
    quantidade: 25,
    peso: 5,
};

console.log(S1724);
//Em JavaScript, você pode adicionar um item a um dicionário

let data = new Date("2023-12-27");
S1724["data"] = data;

console.log(S1724);

// Removendo um item usando o operador delete

delete S1724.data;

console.log(S1724);

// Modificando o valor associado à chave2
S1724.quantidade = 20;

console.log(S1724);

//ARRAY - lista
const lista = [];
console.log(lista); //imprime lista vazia

lista.push(50); // Adiciona 50 ao final da lista
lista.unshift(5); // Adiciona 5 no início da lista
lista.unshift(0); // Adiciona 0 no início da lista
console.log(lista);

lista.splice(2, 0, 25); // Adiciona 25 na posição 2 da lista e não remove nenhum numero
console.log(lista);

lista.push(4); 
lista.splice(0, 1, 4);// Adiciona 0 na posição 0 da lista e remove um item
console.log(lista);

lista[1] = "amor"; // Adiciona uma string na posição 1 da lista e remove o item que era
console.log(lista);

const popmRemove = lista.pop(); // Remove e retorna o último item
console.log(lista);

const shiftRemove = lista.shift(); // Remove e retorna o primeiro item
console.log(lista);

const spliceRemove = lista.splice(2, 1); // Remove 1 item da posição 2
console.log(lista);

const minhaLista = [];
const tamanhoLista = minhaLista.length;
console.log(tamanhoLista);

minhaLista = [1,2,3,4,5,6,7];
console.log(tamanhoLista);

// Usando let para criar uma lista
let minhaListaLet = [1, 2, 3];
minhaListaLet.push(4); 

// Reatribuindo a variável (tanto com const quanto com let)
minhaListaLet = [5, 6, 7]; // Permite reatribuição, pois usamos let
