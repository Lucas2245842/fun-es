/* Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
Aluno: Lucas Henrique Soares de Oliveira */

function volumeCirculo(raio: number): number {
    let volume: number = ((4 / 3) * 3.14) * (raio * raio * raio);
    return volume;
}

const teclado = require(`prompt-sync`)();
let raio: number = parseFloat(teclado(`Digite o raio: `));
console.log(volumeCirculo(raio));