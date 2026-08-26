const botao = document.querySelector('#btn-acao');
const titulo = document.querySelector('.cartao h1');
// Seleciona o link do HTML para podermos controlá-lo
const linkAviso = document.querySelector('#link-redirecionamento');

botao.addEventListener('click', () => {
titulo.style.color = '#e74c3c'; // Altera a cor do título
          
  // 1. Mostra o texto de aviso na tela
  linkAviso.style.display = 'block';
          
  // 2. Desabilita o botão para o usuário não clicar várias vezes
  botao.disabled = true;
  botao.style.backgroundColor = '#ccc';

  // 3. Executa a mudança de página após 3000 milissegundos (3 segundos)
  setTimeout(() => {
      window.location.href = 'modulo2.html';
  }, 3000);
  });

