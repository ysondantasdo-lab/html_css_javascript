// 1. Seletores corrigidos (Agora usando as suas variáveis 'n' e 'x')
const n = document.getElementById('n');
const x = document.getElementById('x');

// Monitora as mudanças em tempo real quando o usuário digita no 'n'
n.addEventListener('input', () => {
    // Captura o texto de dentro do elemento e limpa espaços extras
    let n_Digitado = n.textContent.trim();
    const valor_n = parseInt(n_Digitado, 10);


    if (isNaN(valor_n) || valor_n <= 0) {
        x.innerText = "?";
        return;
    }

    // Executa o cálculo usando a nossa variável segura 'valor_n'
    const xExato = Math.log(valor_n) / Math.log(2);
    const xArredondado = Math.ceil(xExato);

    // Atualiza o x (sua variável do topo) em tempo real na tela
    x.innerText = xArredondado;
});

// Evita que o usuário aperte "Enter" e quebre a linha dentro da fórmula
n.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        n.blur(); // Remove o foco do clique ao apertar Enter
    }
});
