/* Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
Aluno: Lucas Henrique Soares de Oliveira */
function volumeCirculo(raio) {
    var volume = ((4 / 3) * 3.14) * (raio * raio * raio);
    return volume;
}
var teclado = require("prompt-sync")();
var raio = parseFloat(teclado("Digite o raio: "));
console.log(volumeCirculo(raio));
