const alunos = ['João', 'Juliana', 'Caio', 'Ana'];

const mediaDosAlunos = [10,7,9,6]

let listaDeNotasEAlunos = [alunos,mediaDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //includes(?) procura o parâmetro passado dentro do array e retorna boolean true ou false
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) //indexOf(?) retorna o index do array em que o parâmetro foi encontrado, (caso não encontre retorna -1)
        return`${listaDeNotasEAlunos[0][indice]} sua média é ${listaDeNotasEAlunos[1][indice]}`
    }else{
        return `o aluno: ${nomeDoAluno} não  está cadastrado `
    }
}

console.log(exibeNomeNota('Julianaa'))