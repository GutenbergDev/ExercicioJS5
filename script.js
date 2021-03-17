
function criacaoCurupira() {
    // referênciar os elementos da página
    let inNumero = document.querySelector('#inNumero');
    let inAnos = document.querySelector('#inAnos');
    let outListaCurupira = document.querySelector('#outListaCurupira');

    // obtém conteúdos da página
    let curu = Number(inNumero.value);
    let anos = Number(inAnos.value);

    // valida se os números são válidos
    if (curu < 2 || isNaN(curu)) {
        alert('Digite um número válido de Curupiras maior ou igual a 2.');
        inNumero.focus();
        return;
    } else {
        if (anos == 0 || isNaN(anos)) {
            alert('Digite um número válido de anos.');
            inNumero.focus();
            return;
        }
    }

    // cria uma variável do tipo string
    let resposta = "";
    let total = curu;

    for (let i = 1; i <= anos; i++) {
        resposta = `${resposta} ${i} º Anos: ${total} Curupiras \n`;
        total = total * 3;
    }

    // altera o conteúdo da página
    outListaCurupira.textContent = resposta;

}

// referenciar o bt da página que faz menção a function
let btPrevisao = document.querySelector('#btPrevisao');
btPrevisao.addEventListener("click", criacaoCurupira);