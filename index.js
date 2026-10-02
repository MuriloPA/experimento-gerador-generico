// Aplicação de exemplo mínima, representativa de um projeto solo pequeno.
// Sem dependências externas — instalar/testar/buildar deve ser rápido e
// confiável em qualquer uma das três condições do experimento.

function somar(a, b) {
  return a + b;
}

function ehPar(n) {
  return n % 2 === 0;
}

module.exports = { somar, ehPar };
