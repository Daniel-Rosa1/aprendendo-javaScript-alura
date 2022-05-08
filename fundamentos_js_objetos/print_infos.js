const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com'
}


const apresentar = (cliente) => {
  return `nome:${cliente.nome} \nidade:${cliente.idade} \ncpf:${cliente.cpf.substring(0,3)}... \nemail:${cliente.email}`
}

console.log(apresentar(cliente));