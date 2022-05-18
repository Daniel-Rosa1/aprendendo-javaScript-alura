const pegaArquivo = require ('../index');

const ArrayResult= [
  {
    FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }
]

describe('pegaArquivo::', ()=>{
  it('deve ser uma função', ()=>{
    expect(typeof(pegaArquivo)).toBe('function');
  })

  /* it('Deve retornar Array com resultados', async () => {
    const resultado = await pegaArquivo('lib-markdown\test\arquivos\texto1.md')
    expect(resultado).toEqual(ArrayResult)
  }) */

  /* it('deve retornar mensagem "não a links"', async () =>{
    const resultado= await pegaArquivo('C:\Users\danif\Desktop\aulas-js\alura\aprendendo-javaScript-alura\lib-markdown\test\arquivos\texto1_semLinks.md')
    expect(resultado). toBe('não há links')
  }) */
})
