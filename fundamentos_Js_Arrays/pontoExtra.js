const notas = [10, 9, 8, 7 , 6]


// função ?.map retorna o resultado/produto da função passada, atualizando os valores do array
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)