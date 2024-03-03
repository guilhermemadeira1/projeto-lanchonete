var imagem = document.querySelector('div#imagem')
var opção = document.getElementsByName('lista')
var msg =document.querySelector('div#mensagem')
var txtbusca = document.querySelector('input#busca')
var busc = txtbusca.value
var busca = busc.toUpperCase()
//colocar as variáveis dentro das função para não haver erro.
var sel = document.querySelector('select#opçoes')
sel.addEventListener('click', valores)

function valores(){
    
    var caixaimg = document.querySelector('div#imagem')
    var sel = document.querySelector('select#opçoes')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')

    if (sel.value=='hamburguer'){
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        /*transição na primeira vez que clicar*/
        caixaimg.style.width= '300px'
        /*diminuir tamanho da caixa de imagens*/
    }
}

function selecionar(){

    var sel = document.querySelector('select#opçoes')
    var caixaimg = document.querySelector('div#imagem')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')
    var msg =document.querySelector('div#mensagem')
    var opção = document.getElementsByName('lista')
//nesse caso não dá pra usar switch case pois se trata de uma operção lógica.

    if(opção[0].checked){
        msg.innerHTML='Você escolheu: Hambúrguer.'
        
        H.src = 'hamburguer.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        /*transição na primeira vez que clicar*/
        caixaimg.style.width= '300px'
        /*diminuir tamanho da caixa de imagens*/
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        sel.value='hamburguer'
        /*mostra o preço na lista*/
    }
    else if(opção[1].checked){
        msg.innerHTML='Você escolheu: Cachorro-quente.'
        H.src = 'cachorroquente.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        caixaimg.style.width= '300px'

        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        sel.value='cachorro-quente'
    }
    else if(opção[2].checked){
        msg.innerHTML='Você escolheu: Pizza.'
        H.src = 'pizza.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        caixaimg.style.width= '300px'

        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        sel.value='pizza'
    }
    else if(opção[3].checked){
        msg.innerHTML='Você escolheu: Batata-Frita.'
        H.src = 'batata.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        caixaimg.style.width= '300px'

        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        sel.value='batata-frita'
    }
}

function buscar(){

    var sel = document.querySelector('select#opçoes')
    var caixaimg = document.querySelector('div#imagem')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')
    
var msg =document.querySelector('div#mensagem')
var txtbusca = document.querySelector('input#busca')
var busc = txtbusca.value
var busca = busc.toUpperCase()


   switch(busca){
      case "HAMBURGUER":
       case "HAMBÚRGUER":
        msg.innerHTML= "Boa escolha! Compre nosso hambúrger."
        H.src = 'hamburguer.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.style.transition = '0.3s'
        caixaimg.style.width= '300px'

        sel.value='hamburguer'
        break
        
      case "CACHORRO QUENTE":
       case "CACHORRO-QUENTE":
        case "HOT-DOG": 
         case "HOT DOG":
          case "HOTDOG":
        msg.innerHTML="Boa escolha! Compre nosso Cachorro-quente." 
        H.src = 'cachorroquente.jpg'
        H.style.height = '200px'
        H.style.width = '200px'

        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.style.transition = '0.3s'
        caixaimg.style.width= '300px'

        sel.value='cachorro-quente'
        break

      case "PIZZA":
         msg.innerHTML="Boa escolha! Compre nossa Pizza crocante."
         H.src = 'pizza.jpg'
         H.style.height = '200px'
         H.style.width = '200px'
    
         C.style.display = 'none'
         P.style.display = 'none'
         B.style.display = 'none'

         H.style.transition = '0.3s'
         caixaimg.style.width= '300px'

         sel.value='pizza'
         break

      case "BATATA FRITA":
       case "BATATA-FRITA":
         case "BATATA":
         msg.innerHTML="Boa escolha! Compre nossa porção de batata-frita."
         H.src = 'batata.jpg'
         H.style.height = '200px'
         H.style.width = '200px'
 
         C.style.display = 'none'
         P.style.display = 'none'
         B.style.display = 'none'

         H.style.transition = '0.3s'
         caixaimg.style.width= '300px'

         sel.value='batata-frita'
         break

       case "":
        msg.innerHTML="[Você não escreveu nada]"
        break

       default:
        msg.innerHTML="Infelizmente não vendemos isso ainda."
   }

}
function limpar(){
    var opção = document.getElementsByName('lista')
    document.querySelector('input#busca').value= ""
    //o input de texto recebe string vazia.
    location.reload()
    // recarrega a página instantaneamente
    var msg =document.querySelector('div#mensagem')
    msg.innerHTML='Escolha novamente'
}

function pedir(){

    var sel = document.querySelector('select#opçoes')
    var caixaimg = document.querySelector('div#imagem')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')

    var opção = document.getElementsByName('lista')
    var msg =document.querySelector('div#mensagem')
    var txtbusca = document.querySelector('input#busca')
    var busc = txtbusca.value
    var busca = busc.toUpperCase()

    if(busca =="" && opção[0].checked || opção[1].checked || opção[2].checked || opção[3].checked){

        if(opção[0].checked){
            msg.innerHTML='Pedido concluído! Aproveite seu Hambúrguer.'
       }
       else if(opção[1].checked){
           msg.innerHTML='Pedido concluído. Aproveite seu Cachorro-quente.'
       }
       else if(opção[2].checked){
           msg.innerHTML='Pedido concluído. Aproveite sua Pizza.'
       }
       else if(opção[3].checked){
           msg.innerHTML='Pedido concluído. Aproveite sua Batata-frita.'
       }
    }
    
    else{
        switch(busca){
            case "HAMBÚRGUER":
            case "HAMBURGUER":
                msg.innerHTML='Pedido concluído! Aproveite seu Hambúrguer.'
                H.src = 'hamburguer.jpg'
                H.style.height = '200px'
                H.style.width = '200px'
                
                C.style.display = 'none'
                P.style.display = 'none'
                B.style.display = 'none'

                caixaimg.style.width= '300px'
                H.style.transition = '0.3s'

                sel.value='hamburguer'
                 break
            case "CACHORRO-QUENTE":
            case "CACHORRO QUENTE":
            case "HOT DOG":
            case "HOT-DOG":
            case "HOTDOG":
                msg.innerHTML='Pedido concluído. Aproveite seu Cachorro-quente.'
                H.src = 'cachorroquente.jpg'
                H.style.height = '200px'
                H.style.width = '200px'
                
                C.style.display = 'none'
                P.style.display = 'none'
                B.style.display = 'none'

                H.style.transition = '0.3s'
                caixaimg.style.width= '300px'

                sel.value='cachorro-quente'
                 break
            case "PIZZA":
                msg.innerHTML='Pedido concluído. Aproveite sua Pizza.'
                H.src = 'pizza.jpg'
                H.style.height = '200px'
                H.style.width = '200px'
                
                C.style.display = 'none'
                P.style.display = 'none'
                B.style.display = 'none'

                H.style.transition = '0.3s'
                caixaimg.style.width= '300px'

                sel.value='pizza'
                break
             case "BATATA-FRITA":
             case "BATATA FRITA":
             case "BATATA":
                 msg.innerHTML= 'Pedido concluído. Aproveite sua Batata-frita.'
                 H.src = 'batata.jpg'
                 H.style.height = '200px'
                 H.style.width = '200px'
                 
                 C.style.display = 'none'
                 P.style.display = 'none'
                 B.style.display = 'none'

                 H.style.transition = '0.3s'
                 caixaimg.style.width= '300px'

                 sel.value='batata-frita'
                break
             case "":
                 msg.innerHTML='[Escolha algo para pedir]'
                 break
            default:
                 msg.innerHTML='[Não temos este item]'
        }  
    }
}
