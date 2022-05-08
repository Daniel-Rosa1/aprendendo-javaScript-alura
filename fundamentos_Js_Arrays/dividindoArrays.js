const nomes = ['João', ' Juliana', 'Ana', 'Caio', 'Lara',
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos',
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius',
'Renan', 'Renata', 'daisy', 'Camilo']

                        
const sala1 = nomes.slice(0, nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`alunos da sala1: ${sala1} e o tamanho da sala é ${sala1.length}`)
console.log(`alunos da sala2: ${sala2} e o tamanho da sala é ${sala2.length}`)