const nomes = ['ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 5]
const reprovados = nomes.filter((aluno, indicde)=> notas[indicde] <5)
console.log(`reprovados: ${reprovados}`)