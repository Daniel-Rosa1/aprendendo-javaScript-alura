const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com'
}

const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach(atributo => console.log(cliente[atributo]))

console.log(cliente[chaves[0]])