// function loginGoogle(){

const { Input } = require("postcss");

    
// }

const loginRetornoPaginaIncial = document.getElementById('fazerLogin-paginaInicial');

loginRetornoPaginaIncial.addEventListener('click', () =>{
    location = 'pagina-inicial.html';
    // link da pergunta no stack
    //https://pt.stackoverflow.com/questions/407028/como-abrir-um-novo-arquivo-html-na-mesma-aba
});

const cadastroRetornoPaginaInicial = document.getElementById('fazerCadastro-paginaInicial');

cadastroRetornoPaginaInicial.addEventListener('click', () => {
    location = 'pagina-inicial.html';
})


// Página de cadastro -----------

const botaoConcluirCadastro = document.getElementById('concluirCadastro');
botaoConcluirCadastro.addEventListener('click', () => {

    let nomeFormulario = document.getElementById('nomeUsuario');
    let sobrenomeFormulario = document.getElementById('sobrenomeUsuario');
    let cpfFormulario = document.getElementById('cpfUsuario');
    let emailFormulario = document.getAnimations('emailUsuario')
    if(nomeFormulario == '' || sobrenomeFormulario == ''|| emailFormulario == ''){
        alert('Complete os campos!');
    }
})
