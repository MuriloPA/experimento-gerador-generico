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

function fatorial(n) {
  return n <= 1 ? 1 : n * fatorial(n - 1);
}

module.exports = { somar, ehPar, multiplicar, subtrair, dividir, ehPrimo, fatorial };