const livros = require('./listaLivros')
const menorValor = require('./menorValor')
const troca = require('./troca')

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros,atual)

    troca(livros,menor)

}

console.log(livros)