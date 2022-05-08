const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com'
}
console.log(cliente)
cliente.fone = "999999999" // se "chamarmos" um atributo não existente e atribuir um valor a ele,
//o objeto irá  adicionar este novo atributo com o valor passado "
console.log(cliente)
cliente.fone = '88888888888'// caso seja passado um atributo existente, porém com outro valor,
// este atributo recebera este novo valor que foi passado
console.log(cliente)

delete cliente.fone// deletando atributos (chave e valor) e retorna true e false
// porem não retornara false caso o atributo não seja existente 
console.log(cliente)