const chalk = require('chalk');
const fs = require('fs');
const path = require('path');


function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while((temp = regex.exec(texto)) !== null){// percorre o texto atras de ocorrencias da expresão regex. encontra e guarda dentro da variavel temp, qunado temp receber null saira fora do while
    arrayResultados.push({ [temp[1]]: temp[2] })//atribui ao arrayResultados o valor de [temp[1]]: temp[2]
  }                                                                                    //temp[1] tem o nome do link. Para passar como chave de um obj tem que estar dentro de []
  return arrayResultados.length ===0 ? 'não há links' :   arrayResultados;                                                                        //temp[2] esta com o link
}

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'não a arquivo no caminho'));
}

async function pegarArquivo(caminho) {
  const caminhoAbsoluto = path.join(__dirname, caminho);
  const encoding = 'utf-8';
  try {
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    const result = await Promise.all(arquivos.map(async (arquivo) => {
      const localArquivo = `${caminhoAbsoluto}/${arquivo}`;
      const texto = await fs.promises.readFile(localArquivo, encoding);
      return extraiLinks(texto);
    }));
    return result;
  } catch (erro) {
    return trataErro(erro);
  }
 }



module.exports = pegarArquivo;

/* function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';// encoding é o tipode de codificação do arquivo lido 
  fs.promises.readFile(caminhoDoArquivo, encoding)// fs===FileSystem, promises é um  modo assíncrono de função 
  .then((texto) => console.log(chalk.green(texto))) // them  vai executa a funcação assíncrona  assim que ela estiver acabado (recebendo o produto da promises)
  .catch((erro) => trataErro(erro)) // catch "pega" o erro caso ele exista
} */

/* function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding,(erro, texto) =>{
    if(erro){
      trataErro(erro);
    }
    console.log(chalk.green(texto));
  })
} */


