const readline = require('readline');

function inverterString(str) {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe uma string para ser invertida: ", function(minhaString) {
    let resultado = inverterString(minhaString);
    console.log("String original:", minhaString);
    console.log("String invertida:", resultado);
    rl.close();
});
