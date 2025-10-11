let cliqueGirassol = 0;

const mensagensSecretas = [
    "Você achou o girassol mais raro 🌻 assim como você.",
    "Tem algo em você que ilumina tudo ao redor. ☀️",
    "Você é feita de luz, não se esqueça disso. ✨",
    "Mesmo nos dias ruins não deixe de brilhar. 🌟",
    "Meu mundo é mais bonito com você nele. 🌍",
    "Esse girassol sorriu pra você! 😊🌻",
    "Eu te amo, minha girassol. ❤️🌻",
    "Você é linda e amo tudo em você. 💖",
    "Sinto sua falta a cada segundo. ⏳",
    "Você é a flor mais linda(e única) do meu jardim. 🌺"
];

const girassolSecreto = document.getElementById('girassol-secreto');

girassolSecreto.addEventListener('click', () => {
    cliqueGirassol++;

    if (cliqueGirassol === 5) {
        const mensagem = mensagensSecretas[Math.floor(Math.random() * mensagensSecretas.length)];
        mostrarMensagemSecreta(mensagem);
        cliqueGirassol = 0;
    }
});

function mostrarMensagemSecreta(texto) {
    const mensagem = document.createElement('div');
    mensagem.innerText = texto;
    mensagem.style.position = 'fixed';
    mensagem.style.top = '50%';
    mensagem.style.left = '50%';
    mensagem.style.transform = 'translate(-50%, -50%)';
    mensagem.style.backgroundColor = '#fffbe6';
    mensagem.style.border = '2px solid #ffcc00';
    mensagem.style.padding = '20px 30px';
    mensagem.style.borderRadius = '15px';
    mensagem.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    mensagem.style.fontSize = '1.2rem';
    mensagem.style.zIndex = '1000';
    mensagem.style.transition = 'opacity 0.5s';
    mensagem.style.opacity = '0';
    
    document.body.appendChild(mensagem);

    setTimeout(() => mensagem.style.opacity = '1', 50);
    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => mensagem.remove(), 500);
    }, 4000);
}