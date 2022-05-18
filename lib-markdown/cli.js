const chalk = require('chalk')
const pegaArquivo = require('./index')
const validarURLs = require('./http-validacao')

const caminho = process.argv;


async function processaTexto(caminhoDeArquivo){
  const resultado = await pegaArquivo(caminhoDeArquivo[2]);
  if(caminho[3] === 'validar'){
    console.log(chalk.yellow('Links validados:'), await validarURLs(resultado));
  }else{
    console.log(chalk.yellow('lisa de links:'), resultado)
  }
}

processaTexto(caminho)