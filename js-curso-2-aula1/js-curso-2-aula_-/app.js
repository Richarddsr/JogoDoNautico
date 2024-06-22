let listaDeNumerosSorteados = []
let numeroLimite = 15;
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
//pink pussy
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag)
campo.innerHTML = texto
responsiveVoice.speak(texto, "Brazilian Portuguese Female",
{rate:1.2})
}
function exibirMensagemInicial(){
exibirTextoNaTela("h1", "Jogo do Náutico");
exibirTextoNaTela("p", "Escolha um Número entre 1 a 10!");
}
exibirMensagemInicial()

function buceta() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}



function verificarChute() {
    let chute = document.querySelector("input").value;
     if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "é");
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mensage = `é esse número aí, você descobriu com ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela("p", mensage);
        document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
        if (chute > numeroSecreto) {
        exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
         } else {
            exibirTextoNaTela("p", `O número secreto é maior que ${chute}`);
         }  tentativas ++;
         limparCampo()
}
}  

function gerarNumeroAleatorio(){
     let  NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeDeElementosNaLista == numeroLimite) {
            listaDeNumerosSorteados = []
        }

     if (listaDeNumerosSorteados.includes(NumeroEscolhido))
        return gerarNumeroAleatorio();
    else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

