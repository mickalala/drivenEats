let sobremesaa;
function desmarcar(seletor){
    const botaoselecionadoantes=document.querySelector(`${seletor} .selecionado`);
    if(botaoselecionadoantes !== null){
        botaoselecionadoantes.classList.remove('selecionado')
    }  
}

let pratos1;
function pratoselecionado(comidaselect){
    desmarcar('.pratos1')
   
    const comida=document.querySelector(comidaselect);
    comida.classList.add('selecionado');
    if(comidaselect===".um"){
        sobremesaa=".um"
        const removeum=document.querySelector(".verificado4")
        removeum.classList.remove('escondido')
        document.querySelector('.verificado5').classList.add('escondido');
        document.querySelector('.verificado6').classList.add('escondido');
     }
     if(comidaselect===".dois"){
         sobremesaa=".dois"
         const removedois=document.querySelector(".verificado5")
         removedois.classList.remove('escondido')
         document.querySelector('.verificado4').classList.add('escondido');
         document.querySelector('.verificado6').classList.add('escondido');
      }
      if(comidaselect===".tres"){
         sobremesaa=".tres"
         const removetres=document.querySelector(".verificado6")
         removetres.classList.remove('escondido')
         document.querySelector('.verificado5').classList.add('escondido');
         document.querySelector('.verificado4').classList.add('escondido');
      }

   
    
    pratos1=comida.innerHTML;
  
    continuar();
    
}

let pratos2;
function bebidaselecionado(comidaselect){
    desmarcar('.pratos2')
    const comida2=document.querySelector(comidaselect);
    comida2.classList.add('selecionado');
    
    if(comidaselect===".umbe"){
        sobremesaa=".umbe"
        const removeumbe=document.querySelector(".verificado7")
        removeumbe.classList.remove('escondido')
        document.querySelector('.verificado8').classList.add('escondido');
        document.querySelector('.verificado9').classList.add('escondido');
     }
     if(comidaselect===".doisbe"){
         sobremesaa=".doisbe"
         const removedoisbe=document.querySelector(".verificado8")
         removedoisbe.classList.remove('escondido')
         document.querySelector('.verificado7').classList.add('escondido');
         document.querySelector('.verificado9').classList.add('escondido');
      }
      if(comidaselect===".tresbe"){
         sobremesaa=".tresbe"
         const removetresbe=document.querySelector(".verificado9")
         removetresbe.classList.remove('escondido')
         document.querySelector('.verificado8').classList.add('escondido');
         document.querySelector('.verificado7').classList.add('escondido');
      }

    pratos2=comida2.innerHTML;
    continuar();
}
let pratos3;
function sobremesaselecionado(comidaselect){
    desmarcar('.pratos3')
    const comida3=document.querySelector(comidaselect);
    comida3.classList.add('selecionado');  
    console.log(comidaselect)
    if(comidaselect===".umso"){
       sobremesaa=".umso"
       const removeumso=document.querySelector(".verificado1")
       removeumso.classList.remove('escondido')
       document.querySelector('.verificado2').classList.add('escondido');
       document.querySelector('.verificado3').classList.add('escondido');
    }
    if(comidaselect===".doisso"){
        sobremesaa=".doisso"
        const removedoisso=document.querySelector(".verificado2")
        removedoisso.classList.remove('escondido')
        document.querySelector('.verificado1').classList.add('escondido');
        document.querySelector('.verificado3').classList.add('escondido');
     }
     if(comidaselect===".tresso"){
        sobremesaa=".tresso"
        const removetresso=document.querySelector(".verificado3")
        removetresso.classList.remove('escondido')
        document.querySelector('.verificado2').classList.add('escondido');
        document.querySelector('.verificado1').classList.add('escondido');
     }
    pratos3=comida3.innerHTML; 
    continuar();
}
function continuar(){
    if(pratos1 !==undefined){
        if(pratos2 !==undefined){
            if(pratos3 !==undefined){
        const finalizar=document.querySelector('.semselecionar')
        finalizar.classList.add('fechar')
        const novobotao=document.querySelector('.finalizar')
       novobotao.classList.remove('fechar')
    }
        }  
            }
       
    }
    function wpp(){
         let mensagem;
        mensagem=`Olá, gostaria de fazer o pedido:
        - Prato: Frango Yin Yang
        - Bebida: Coquinha Gelada
        - Sobremesa: Pudim
        Total: R$ 27,70`
       window.open("https://wa.me/5522999999999?text=" + mensagem)
    }
