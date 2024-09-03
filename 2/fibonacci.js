const readline = require('readline');

function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b === num || num === 0;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe um número para verificar se ele pertence à sequência de Fibonacci: ", function(numero) {
    numero = parseInt(numero);

    if (isFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});
