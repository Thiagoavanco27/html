const cartão1 = {
    nome: "Daniel",
    saldo: 50
};

const cartão2 = cartão1

console.log(cartão1)
console.log(cartão2)

cartão2.saldo -= 25; // esse comando vai alterar o valor do cartão1 mesmo com const

console.log(cartão1)
console.log(cartão2)