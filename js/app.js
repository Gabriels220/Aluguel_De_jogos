let numeroDeJogos = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let { classList, textContent } = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');

    if (classList.contains('dashboard__item__img--rented')) {
        classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';  // Corrigido para atualizar o texto do botão
        numeroDeJogos -= 1;  // Decrementar o número de jogos alugados
        alert(`Você devolveu o jogo ${nomeDoJogo.textContent}`);
    } else {
        classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';  // Atualizar o texto do botão
        botao.classList.add('dashboard__item__button--return');
        numeroDeJogos += 1;  // Incrementar o número de jogos alugados
    }

    console.log(numeroDeJogos);
}
