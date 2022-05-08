const nome = ['ana', 'ju', 'Leo', 'Paula']

nome.forEach(imprimeNomes)// forEach só funciona caso seja passado uma função para ela (segundo parâmetro é o índice)

function imprimeNomes(nome){
    console.log(nome)
}