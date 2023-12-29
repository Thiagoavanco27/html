const notas = [
    {nome: "João", nota: 5},
    {nome: "Gustavo", nota: 8},
    {nome: "Pedro", nota:5},
    {nome: "Lucas", nota:10},
    {nome: "Thiago", nota:9},
    {nome: "Leticia", nota:4},
    {nome: "Arthur", nota:3},
    {nome: "Heitor", nota:6},
    {nome: "isabel", nota:2},
    {nome: "Carol", nota:8},
    {nome: "Joana", nota:0},
    {nome: "Tomas", nota:5 },
    {nome: "Neyde", nota:9 },
    {nome: "Ana", nota: 10 },
    {nome: "Ingrid", nota: 7 },
];

const aprovados = notas.filter(function (notas) {
    return notas.nota >= 6;
});

console.log(`Segue a lista de alunos aprovados`, aprovados)

const reprovado = notas.find(function (notas) {
    return notas.nota === 0;
});
console.log(`O aluno reprovado`, reprovado);

const nome =aprovados.map(function(aprovado){
    return aprovado.nome
})

console.log(nome)