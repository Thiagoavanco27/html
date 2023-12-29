/* #### Observações:

- O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
- Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const .
- Comece cada resolução imprimindo na tela o texto "Resultado do exercício X", sendo X o número do exercício em questão. */

/*   1 - Escreva um programa executando os seguintes passos:

-Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.

-Imprima na tela: A primeira variável. 

-Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. X é a posição do elemento na lista. */

const lista = [1, 2, 3, 4, 5];

console.log(`O valor do elemento X da minha lista é ${lista}`);

/* ### 2 - Escreva um programa executandos os próximos passos:    

    -Crie uma variável com valor inicial de um objeto que represente um pokemon (nome, estamina, defesa, ataque, habilidade).

    -Imprima na tela os textos "Meu objeto pokemon possui "chave" e $valor", substituindo os termos com $ pelos valores correspondentes ao conjunto chave/valor. */

const pokemon = {
    nome:"Pikachu",
    Estamina:200,
    Defesa: 50,
    ataque: 70,
    Habilidade: null
}

console.log(`Meu objeto pokemon possui ataque ${pokemon.ataque}`)