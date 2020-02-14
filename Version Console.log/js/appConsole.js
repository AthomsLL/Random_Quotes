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

// Génération d'une seule citation aléatoire
function randomQuote(array) {
    return array[Math.floor(Math.random() * array.length)]; 
}

console.log(randomQuote(PSG.sujet) + " " + randomQuote(PSG.verbe) + " " + randomQuote(PSG.complement));
console.log(randomQuote(Stargate.sujet) + " " + randomQuote(Stargate.verbe) + " " + randomQuote(Stargate.complement));

// Génération de plusieurs citations
function generateQuotes(theme, nbQuotes = 5) {
    if(nbQuotes > 0 && nbQuotes <= 5) {
        for (let i = 0; i < nbQuotes; i++) {
            console.log(randomQuote(theme.sujet) + " " + randomQuote(theme.verbe) + " " + randomQuote(theme.complement));
        }
    }
    else {
        console.log("Il faut indiquer un chiffre entre 1 et 5 !");
    }
}

generateQuotes(PSG, 4);
generateQuotes(Stargate, 3);