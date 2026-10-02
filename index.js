function somar(a, b) {
  return a + b;
}

function ehPar(n) {
  return n % 2 === 0;
}

function multiplicar(a, b) {
  return a * b;
}

function subtrair(a, b) {
  return a - b;
}

function dividir(a, b) {
  if (b === 0) throw new Error('Divisão por zero');
  return a / b;
}

function ehPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { somar, ehPar, multiplicar, subtrair, dividir, ehPrimo };