const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '654.8545.865-87',
    email:'andre@email.com',
    fones: ['55259951445665' , '55249654654654'],
    dependentes: [
        {
        nome: 'Sara silva',
        parentesco: 'filho',
        dataNascimento: '20/03/2011'
    },
    {
        nome: 'gustavo', 
        parentesco: 'folho', 
        dataNascimento:'04/01/2014'
    }
    ],

    saldo: 100,

    depositar: function(valor) {
        this.saldo += valor;
    }
}

//object.value(?) retorna um array com todos elementos e valores de um objeto. cada elemento e valor também é incapsulado dentro de um array 
//object.entries(?) retorna arrays com chave e valor de cada elemento dentro do nosso objeto
//object.keys(?) retorna um arrays com as keys/elemento do nos objeto

if(propsCliente.includes('dependentes')){
function oferecerSeguros(obj) {
    const propsCliente = Object.keys(obj)
        console.log(`Oferta de seguro de vida  para ${obj.nome}`)
    }
}

oferecerSeguros(cliente)