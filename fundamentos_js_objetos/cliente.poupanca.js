function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cps = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoupanca){
    cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoupanca = saldoPoupanca
    
}


const ju = new clientePoupanca('ju', '555.666.444-87','ju@email.com',100,200)

console.log(ju)

clientePoupanca.prototype.depositarPoupanca = function(valor){
    this.saldoPoupanca += valor
}


console.log(ju)
ju.depositarPoupanca(30)
console.log(ju.saldoPoupanca)