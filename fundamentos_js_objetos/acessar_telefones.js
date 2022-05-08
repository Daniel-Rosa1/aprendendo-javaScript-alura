const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com',
    fones: ['55259951445665' , '55249654654654']
}
//trabalhado com array dentro de um objeto
cliente.fones.forEach((fone, index) => console.log(`telefone ${index +1}: ${fone}`))