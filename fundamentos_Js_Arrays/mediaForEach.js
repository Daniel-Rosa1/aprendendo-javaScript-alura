const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//callback
notas.forEach(nota => { // forEach com ArrowFunction
    somaDasNotas += nota
})

notas.forEach(function(nota){ // forEach com function normal
    somaDasNotas += nota
})

let medias = somaDasNotas/ notas.length

console.log(medias)