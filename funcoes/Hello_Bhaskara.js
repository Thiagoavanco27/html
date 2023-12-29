function HelloWorld () {
    console.log("Ola mundo!")
    console.log("Hello World!")
    console.log("Hola Mundo!")
    console.log("Bonjour le monde!")
    console.log("Ciao mondo!")
}
HelloWorld()

let number = 1;

function raiz(){
    return number ** (1/2);
}


function NumberOfTime() {
    if (number === 0) {
        number ++;
        console.log(`O número da vez é ${number}`)
    }
}
NumberOfTime()

function Bhaskara(a, b, c){
    const delta = b**2-4*a*c
    const x1 = (-b + raiz(delta))/(2 * a);
    const x2 = (-b - raiz(delta))/(2 * a);

    console.log(`O ponto x1 é ${x1} e x2 é ${x2}`);
};

Bhaskara(2, 3, -2)
