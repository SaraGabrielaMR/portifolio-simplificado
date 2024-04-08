//Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

//Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
const botaoMostrarMenos = document.querySelector('.btn-mostrar-menos');

//Passo 2 - identificar o clique no botão 
botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos 
    mostrarMaisProjetos();

    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 - pegar o botão e esconder ele
    esconderBotao(); 

    aparecerBotaoMostrarMenos();
});

function aparecerBotaoMostrarMenos() {
    botaoMostrarMenos.classList.add('aparecer');
}

function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

botaoMostrarMenos.addEventListener('click', () =>{

    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });

    botaoMostrarProjetos.classList.remove('remover');

    botaoMostrarMenos.classList.remove('aparecer');
});

window.onload = function() {
    document.activeElement.blur();
};