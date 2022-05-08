const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipoColecao: ["quadrinhos"],
    contato: "joao@email.com",
    //atributo função
    adicionarTipo:function(propriedade,tipo){
     this[propriedade].push(tipo)
   }
   }

   for(i = 0; i < 4; i++) {
   colecionador.adicionarTipo("tipoColecao","HQ"+i)
 }

 console.log(colecionador)