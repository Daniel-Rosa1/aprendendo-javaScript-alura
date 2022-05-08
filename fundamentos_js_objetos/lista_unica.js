const clientes =[
    {
        nome: 'Andre',
        cpf: '654.8545.865-87',
        dependentes: [{
            nome: 'Sara',
            parentesco: 'filho',
            dataNascimento: '20/03/2011'
        },
        {
            nome:'Samia',
            parentesco: 'filha',
            dataNascimento:'04/01/2014'

        }
        ]
    },
    {
        nome: 'Juliana',
        cpf: '58736578912',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNascimento: '30/08/2020'
        }]
    }
]

const listaDeDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDeDependentes)