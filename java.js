function sendMessage(){
    var mensagem = document.getElementById('input-mensagem')
    if(!mensagem.value)
    {
        mensagem.style.border = '3px solid red'
        return;
    }
    mensagem.style.border = 'none'
    //var chat = document.getElementsByClassName('chat-mensagem')
    var mensagemChat = document.getElementById('chat-mensagem')
    var divMensagemEnviada = document.getElementsByClassName('message sent')

    //Definições de variáveis que irão ser inseridas no HTML

    //var svgChecked = '<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 448 512"> <path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/>     </svg>     </span> '
    //var svgDropDown = '<svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 512 512">     <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/> </svg>'
 
    //var msgSent = document.createElement('div')
    //msgSent.className = 'message sent'


    //mensagemChat.innerHTML = mensagem.value
    //mensagemChat.innerHTML = msgSent.nodeValue
    //mensagemChat.innerHTML = divMensagemEnviada + svgDropDown + svgChecked + mensagem.value
    //Modelo utilizando o sinal de crase
    mensagemChat.innerHTML = `
    <div class="message sent">
    <span class="sender">
        <svg class="recebido" xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 448 512">
            <path
                d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
        </svg>
    </span>
    <span class="drop-button">
        <button class="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 0 512 512">
                <path
                    d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
        </button>
    </span>
    <div class="content">
        <p>${mensagem.value}</p>
    </div>
    </div>
    `
    
    
    

    mensagem.value = ''

}
    /**
     * 
     * var mensagemSent = document.createElement('div')
    mensagemSent.className = 'message sent'
    mensagemChat.appendChild(mensagemSend)
    mensagemChat.innerHTML = mensagemChat
     
    
    var mensagemSpam = document.createElement('span')
    mensagemSpam.className = 'sender'

    var mensagemSvg = document.createElement('svg') // class="menu-icon" viewBox="0 0 54 54" width="54" height="54"')
    mensagemSvg
    var mensagemDivDrop = document.createElement('span')
    mensagemDivDrop.className = 'drop-button'
    //mensagemSent.innerHTML = mensagemDivDrop

    var mensagemButton = document.createElement('button')
    mensagemButton.className = 'dropdown'
    //mensagemDivDrop.innerHTML = mensagemButton

    var mensagemDiv = document.createElement('div')
    mensagemDiv.className = 'content'
    //historyBox.innerHTML = mensagemDiv

    var mensagemP = document.createElement('p')    
    
    mensagemDiv.appendChild(mensagemP)
  
    mensagemChat.appendChild(mensagemDiv)
    
    mensagemChat.appendChild(mensagemSent)

    mensagemSent.appendChild(mensagemSpam)
   
    mensagemSent.appendChild(mensagemDivDrop)
   
    mensagemDivDrop.appendChild(mensagemButton)

    mensagemChat.appendChild(mensagemDiv)
    mensagemChat.innerHTML = mensagemDiv.value
    */
   

