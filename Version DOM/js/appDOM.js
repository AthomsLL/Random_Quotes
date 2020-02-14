/***************************/
/* GENERATEUR DE CITATIONS */
/***************************/

// Création des thèmes des citations
const PSG = {
    titre: "PSG",

    sujet: [
        "Kylian M'Bappé",
        "Presnel Kimpembé",
        "Leandro Paredes",
        "Thomas Meunier",
        "Mauro Icardi"
    ], 

    verbe: [
        "rate",
        "envoie",
        "crucifie",
        "tacle",
        "marque"
    ],

    complement: [
        "un but fabuleux.",
        "le gardien d'une frappe imparable dans la lucarne.",
        "une chandelle en tribunes.",
        "le ballon dans le but d'une tête limpide.",
        "proprement le joueur adverse."
    ]
}

const Stargate = {
    titre: "Stargate",

    sujet: [
        "Jack",
        "Samantha",
        "Daniel",
        "Teal'c",
        "George"
    ], 

    verbe: [
        "désactive",
        "tue",
        "prend",
        "découvre",
        "apprend"
    ],

    complement: [
        "l'existence de portes des étoiles.",
        "un Goa'uld.",
        "plusieurs langues lors de leurs voyages.",
        "l'accès à la porte des étoiles.",
        "la direction de l'équipe d'explorateurs SG-1."
    ]
}

/*****************************************************************************************/
/**************************** LIAISON ET AFFICHAGE DANS LE DOM ***************************/
/*****************************************************************************************/

/* Variables et constantes */
let quotesContainer = document.getElementById('quotes-container');
const BtnGo = document.getElementById('btn-go');
const BtnRestart = document.getElementById('btn-restart');

// Génération d'une citation aléatoire
function randomQuote(array) {
    return array[Math.floor(Math.random() * array.length)]; 
}

BtnGo.addEventListener("click", () => {
    theme = document.getElementById('theme-select').value;
    nbQuote = document.getElementById('numbers').value;
    
    for (let i = 0; i <= nbQuote - 1; i++) {
        let paragraphe = document.createElement("p");

        if(theme === PSG.titre) {
            paragraphe.textContent = randomQuote(PSG.sujet) + " " + randomQuote(PSG.verbe) + " " + randomQuote(PSG.complement);
        }
        else if(theme === Stargate.titre) {
            paragraphe.textContent = randomQuote(Stargate.sujet) + " " + randomQuote(Stargate.verbe) + " " + randomQuote(Stargate.complement);
        }

        quotesContainer.appendChild(paragraphe);
        BtnGo.style.display = "none";
        BtnRestart.style.display = "block";
    }

    event.preventDefault();
}, false);

BtnRestart.addEventListener("click", () => {
    BtnRestart.style.display = "none";
    BtnGo.style.display = "block";
    quotesContainer.innerHTML = "";
}, false);