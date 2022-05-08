const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

// primeiro parâmetro informa o índice de inicio da remoção.
// Segundo elemento informa a quantidade de indices a serem removidos (caso seja passado 0 não será removido nada) a partir do primeiro parâmetro
// Terceiro parâmetro é opcional, caso queira adicionar um elemento neste indices
//listaDeChamada.splice(1,2,'Rodrigo')
listaDeChamada.splice(2,0,'rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`)