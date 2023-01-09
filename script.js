function pratoselecionado(comidaselect){
    const comida=document.querySelector(comidaselect);
    comida.classList.add('selecionado');
}
function vetor(esse){
    const vetor=document.querySelector(esse)
    vetor.classList.remove('escondido')
}

function bebidaselecionado(comidaselect){
    const comida=document.querySelector(comidaselect);
    comida.classList.add('selecionado');
    const vetor=document.querySelector('.verificado')
    vetor.classList.remove('escondido')
}
function sobremesaselecionado(comidaselect){
    const comida=document.querySelector(comidaselect);
    comida.classList.add('selecionado');   
}
