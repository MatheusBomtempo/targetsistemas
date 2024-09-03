const fs = require('fs');

// Carregar os dados do arquivo JSON
const dados = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

function calcularFaturamento(dados) {
    // Filtrar os dias com faturamento maior que zero
    const diasComFaturamento = dados.filter(dia => dia.valor > 0);

    // Encontrar o menor e maior faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Calcular a média de faturamento
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Contar os dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(dados);

console.log(`Menor faturamento: ${resultado.menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
