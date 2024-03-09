var imagem = document.querySelector('div#imagem')
var opção = document.getElementsByName('lista')
var msg =document.querySelector('div#mensagem')
var txtbusca = document.querySelector('input#busca')
var busc = txtbusca.value
var busca = busc.toUpperCase()
//colocar as variáveis dentro das função para não haver erro.
var sel = document.querySelector('select#opçoes')
//sel = opções de preços
sel.addEventListener('click', selecionarPreços)

sel.value=""
//quando a página carregar o select recebe opção vazia

function selecionarPreços(){

    var msg = document.querySelector("div#mensagem")
    var caixaimg = document.querySelector('div#imagem')
    var opção = document.getElementsByName('lista')

    var sel = document.querySelector('select#opçoes')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')

    if (sel.value=='hamburguer'){
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.src = 'imagens/hamburguer.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        /*transição na primeira vez que clicar*/
        caixaimg.style.width= '300px'
        /*diminuir tamanho da caixa de imagens*/
        opção[0].checked = true
        //marca caixa de opção Hambúrguer
        msg.innerHTML = sel[0].innerHTML
        //mostra uma mensagem com o mesmo texto da opção Hambúrguer
    }
    else if (sel.value =='cachorro-quente'){
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.src = 'imagens/cachorroquente.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'
        
        caixaimg.style.width= '300px'
        opção[1].checked = true
        //marca opção Cachorro-quente
        msg.innerHTML = sel[1].innerHTML
         //mostra uma mensagem com o mesmo texto da opção Cachoro-quente

    }
    else if (sel.value == 'pizza'){
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.src = 'imagens/pizza.jpg'
        H.style.height = '200px'
        H.style.width = '200px'
        H.style.transition = '0.3s'

        caixaimg.style.width = '300px'
        opção[2].checked = true
        //marca opção Pizza
        msg.innerHTML = sel[2].innerHTML
         //mostra uma mensagem com o mesmo texto da opção Pizza
    }
    else if (sel.value == "batata-frita"){
        C.style.display = 'none'
        P.style.display = 'none'
        B.style.display = 'none'

        H.src = 'imagens/batata.jpg'
        H.style.width = '200px'
        H.style.height = '200px'
        H.style.transition = '0.3s'

        caixaimg.style.width = '300px'
        opção[3].checked = true

        msg.innerHTML = sel[3].innerHTML
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
        
        H.src = 'imagens/hamburguer.jpg'
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
        H.src = 'imagens/cachorroquente.jpg'
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
        H.src = 'imagens/pizza.jpg'
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
        H.src = 'imagens/batata.jpg'
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
        H.src = 'imagens/hamburguer.jpg'
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
        H.src = 'imagens/cachorroquente.jpg'
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
         H.src = 'imagens/pizza.jpg'
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
         H.src = 'imagens/batata.jpg'
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
    var caixaimg = document.querySelector('div#imagem')
    var sel = document.querySelector('select#opçoes')
    var H = document.getElementById('hamburguer')
    var C = document.getElementById('cachorro-quente')
    var P = document.getElementById('pizza')
    var B = document.getElementById('batata')
    var sel = document.querySelector('select#opçoes')
    var msg =document.querySelector('div#mensagem')

    document.querySelector('input#busca').value= ""
    //o input de texto recebe string vazia.
    sel.value = ""
    //preço fica vazio
    caixaimg.style.width = '100%'

    for(i in opção){
        //cada opção funciona como uma lista
        opção[i].checked = false
    }
    //desmarcar opções quando quando limpar

    H.style.display = 'inline-block'
    C.style.display = 'inline-block'
    P.style.display = 'inline-block'
    B.style.display = 'inline-block'

    H.style.width = '100px'
    H.style.height = '100px'
    H.style.transition = 'none'//retirar animação

    //a imagem dos pedidos selecionados são substituidos pela imagem do hamburguer, por isso só precisa mudar o tamanho desta enquanto as outras ficam visíveis como bloco em linha (inline-block)

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
                H.src = 'imagens/hamburguer.jpg'
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
                H.src = 'imagens/cachorroquente.jpg'
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
                H.src = 'imagens/pizza.jpg'
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
                 H.src = 'imagens/batata.jpg'
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
