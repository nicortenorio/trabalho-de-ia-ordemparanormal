const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quanto de exposição paranormal você está agora?",
        alternativas: [
            {
                texto: "20%",
                afirmacao: "Sua exposição paranormal é de 20%. Começa a sentir um calafrio na espinha, como se algo estivesse te observando."
            },
            {
                texto: "...",
                afirmacao: "Sua exposição aumentou para 25%. Uma sensação de frio percorre o ambiente e você começa a ouvir sussurros ao fundo."
            }
        ]
    },
    {
        enunciado: "Agora 25.",
        alternativas: [
            {
                texto: "...",
                afirmacao: "Você sente uma pressão no ar, e as luzes começam a piscar. A tensão é quase insuportável."
            },
            {
                texto: "?",
                afirmacao: "Sua visão fica embaçada por um momento, como se algo estivesse alterando sua percepção da realidade."
            }
        ]
    },
    {
        enunciado: "30% de exposição paranormal",
        alternativas: [
            {
                texto: "!",
                afirmacao: "Você ouve gritos distantes e uma presença opressora te rodeia, como se algo estivesse se aproximando rapidamente."
            },
            {
                texto: "...",
                afirmacao: "Você sente uma dor forte em sua cabeça, como se suas memórias estivessem sendo apagadas ou distorcidas."
            }
        ]
    },
    {
        enunciado: "40% de exposição paranormal",
        alternativas: [
            {
                texto: "...",
                afirmacao: "Sua mente está sendo invadida por um conhecimento infinito, mas ao custo de sua própria existência."
            },
            {
                texto: "...",
                afirmacao: "A realidade ao seu redor começa a desmoronar, e você sente como se estivesse se dissolvendo na própria escuridão."
            }
        ]
    },
     
    {
        enunciado: "50% de exposição paranormal",
        alternativas: [
            {
                texto: "...",
                afirmacao: "Você perde tudo,"
            },
            {
                texto: "...",
                afirmacao: "Você perdeu tudo,"
            }
        ]
    },
    {
        enunciado: "70%",
        alternativas: [
            {
                texto: "...",
                afirmacao: "seus amigos,"
            },
            {
                texto: "?",
                afirmacao: "seus amigos,"
            }
        ]
    },
    {
        enunciado: "80% ",
        alternativas: [
            {
                texto: "!",
                afirmacao: "sua família,"
            },
            {
                texto: "...",
                afirmacao: "sua família,"
            }
        ]
    },
    {
        enunciado: "90%",
        alternativas: [
            {
                texto: "...",
                afirmacao: "tudo que você mais ama, mesmo que seja pouco."
            },
            {
                texto: "...",
                afirmacao: "tudo que você mais ama, mesmo que seja pouco."
            }
        ]
    },
    {
        enunciado: "você se lembra de tudo...",
        alternativas: [
            {
                texto: "...",
                afirmacao: "Você é consumida pelo conhecimento,"
            },
            {
                texto: "...",
                afirmacao: "Você é consumida pelo conhecimento,"
            }
        ]
    },
    {
        enunciado: "E saber tudo Beatrice é perder tudo...",
        alternativas: [
            {
                texto: "!",
                afirmacao: "o preço por saber tudo é alto demais"
            },
            {
                texto: "...",
                afirmacao: "o preço por saber tudo é alto demais"
            }
        ]
    },
    {
        enunciado: "100% de exposição paranormal",
        alternativas: [
            {
                texto: "...",
                afirmacao: "e você infelizmente pagou por isso,"
            },
            {
                texto: "...",
                firmacao: "e você infelizmente pagou por isso,"
            }
        ]
    },
     {
        enunciado: "Você não existe mais.",
        alternativas: [
            {
                texto: "...",
                afirmacao: "é o seu fim."
            },
            {
                texto: "?",
                afirmacao: "é o seu fim."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "A realidade se desfaz...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
