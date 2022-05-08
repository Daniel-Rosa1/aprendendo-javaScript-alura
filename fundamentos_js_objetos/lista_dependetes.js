const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com',
    fones: ['55259951445665' , '55249654654654'],
    dependentes: [{
        nome: 'Sara silva',
        parentesco: 'filho',
        dataNascimento: '20/03/2011'
    }]
}
cliente.dependentes.push({
    nome: 'gustavo', 
    parentesco: 'folho', 
    dataNascimento:'04/01/2014'
})

const filhoMaisNono = cliente.dependentes.filter( dependentes => dependentes.dataNascimento === '04/01/2014')

console.log(filhoMaisNono)
    
