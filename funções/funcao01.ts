/* 01-Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar 1 se o número for par e 0 se for ímpar
Aluno: Lucas Henrique Soares de Oliveira */

function imPar(valor: number): number {
    if (valor % 2 == 0) {
        retorno = 1;
    } else {
        retorno = 0;
    }
    return retorno;
}

let retorno: number
const teclado = require(`prompt-sync`)();
let n: number = parseInt(teclado(`Digite o número`));

console.log(imPar(n));