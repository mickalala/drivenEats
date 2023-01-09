function desmarcar(seletor){
    const botaoselecionadoantes=document.querySelector(`${seletor} .selecionado`);
    if(botaoselecionadoantes !== null){
        botaoselecionadoantes.classList.remove('selecionado')
    }
}
function vetor(comida){
    
}
let pratos1;
function pratoselecionado(comidaselect){
    desmarcar('.pratos1')
   
    const comida=document.querySelector(comidaselect);
    comida.classList.add('selecionado');
    
    const comidaantes=document.querySelector(`${comida} .selecionado`);
    if(comidaantes!==null){
        document.querySelector('.verificado').classList.add('escondido');
    }else{
        document.querySelector('.verificado').classList.remove('escondido');
    }
    pratos1=comida.innerhtml;
}

let pratos2;
function bebidaselecionado(comidaselect){
    desmarcar('.pratos2')
    const comida2=document.querySelector(comidaselect);
    comida2.classList.add('selecionado');
    const vetor=document.querySelector('.verificado')
    vetor.classList.remove('escondido')
    pratos2=comida2.innerhtml;
}
let pratos3;
function sobremesaselecionado(comidaselect){
    desmarcar('.pratos3')
    const comida3=document.querySelector(comidaselect);
    comida3.classList.add('selecionado');  
    pratos3=comida3.innerhtml; 
}
function continuar(){
    if(pratos1 !==undefined){
        if(pratos2!==undefined){
            if(pratos3!==undefined){

            }
        }
    }
}
