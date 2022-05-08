function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cps = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new cliente('daniel','123.456.789-12','daniel@email.com', 100)

console.log(andre)