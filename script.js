let quantidadeDeCartas = Number(prompt('Bem vindo ao PARROT CARD GAME!\n \nCom quantas cartas de 4 à 14 você quer jogar?'))
const cartas = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn'];
const joguinho = [];
let cartasEmbaralhadas = [];
let quantidadeDeJogadas = 0;
let cartaVirada = false;

while (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || (quantidadeDeCartas % 2) === 1) {
    quantidadeDeCartas
}

function iniciarJogo() {
    for (let i = 0; i < (quantidadeDeCartas / 2); i++) {
        const cartasDoJogo = cartas[i];
        joguinho.push(cartasDoJogo);
        joguinho.push(cartasDoJogo);
    }
    cartasEmbaralhadas = joguinho.sort(comparador);
    console.log(cartasEmbaralhadas)
    mostrarCartas();
}

function comparador() {
    return Math.random() - 0.5;
}

function mostrarCartas() {
    for (let i = 0; i < cartasEmbaralhadas.length; i++) {
        const estiloCarta = `
        <div class="card" onclick="virarCarta(this)" >
            <div class="frente">
                <img class="${cartasEmbaralhadas[i]} piriquito" src="./gifs/${cartasEmbaralhadas[i]}parrot.gif" />
            </div>
            
            <div class="verso">
                <img src="./gifs/front.png"/>
            </div>
        </div>
        `
        document.querySelector('.cards').innerHTML += estiloCarta;
    }
}

iniciarJogo();

function virarCarta(card) {
    let cardFrente = card.querySelector(".frente");
    cardFrente.classList.add("virada");

    let cardVerso = card.querySelector(".verso")
    cardVerso.classList.add("virada");

    if (!cartaVirada) {
        cartaVirada = true;
        cartaUm = card;
    }else{
        cartaVirada = false;
        cartaDois = card;

        compararCartas(cartaUm, cartaDois)
    }

    quantidadeDeJogadas++
    fimDeJogo()
}

function compararCartas (primeiraCarta, segundaCarta) {
    if (primeiraCarta.innerHTML != segundaCarta.innerHTML) {
        setTimeout(function (){
            let carta1Frente = primeiraCarta.querySelector(".frente")
            carta1Frente.classList.remove("virada");

            let carta1Verso = primeiraCarta.querySelector(".verso")
            carta1Verso.classList.remove("virada");

            let carta2Frente = segundaCarta.querySelector(".frente")
            carta2Frente.classList.remove("virada");

            let carta2Verso = segundaCarta.querySelector(".verso")
            carta2Verso.classList.remove("virada");
        }, 1000)
    }
}

function fimDeJogo() {
    const jogadas = document.querySelectorAll(".virada");
    setTimeout(function(){
        if (jogadas.length/2 == quantidadeDeCartas) {
            alert(`Parabéns!!! Você ganhou em ${quantidadeDeJogadas/2} jogadas.`)
        }
    }, 500);
    
}