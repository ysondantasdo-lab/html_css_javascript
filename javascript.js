//Código referente ao n^2
const n2 = document.getElementById('n2')
const x2 = document.getElementById('x2');

n2.addEventListener('input', () => {
    const valorn2 = Number(n2.value);
    const resultadox2 = (valorn2 * (valorn2-1))/2;
    x2.textContent = resultadox2; 
});

// Código referente a operação matemática de Log
const n = document.getElementById('n');
const x = document.getElementById('x');

n.addEventListener('input', () => {
  const valor = Number(n.value);

  if (!Number.isInteger(valor) || valor < 1) {
    x.textContent = '?';
    return;
  }

  x.textContent = Math.ceil(Math.log2(valor)); // o Math.ceil() serve para arredondar para cima
});