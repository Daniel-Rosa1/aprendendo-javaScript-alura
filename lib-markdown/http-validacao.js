const chalk = require('chalk');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function manejaErros(erro){
  throw new Error(chalk.red(erro.massage));
}

async function checaStatus(arrayURLs){
  try{
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
      const res = await fetch(url);
      return `${res.status} - ${res.statusText}`;
    })) 
    return arrayStatus
  }catch(erro){
    manejaErros(erro);
  }
}

function geraArrayDeURLs(arrayLinks){
  return arrayLinks.flat().map(ObjetoLink => Object.values(ObjetoLink).join())
}

async function validarURLs(arrayLinks){
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  
  const resultados = arrayLinks.flat().map((objeto, indece) =>({...objeto, status:
     statusLinks[indece]
    }))

    return resultados
}

module.exports = validarURLs;