/*****************************************************************************************/
/************************************** ORIENTÉ OBJET/CLASS *******************************/
/*****************************************************************************************/

//Création de la classe générant les citations
class Citations {
    theme = [
        {
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
        },
        
        {
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
    ]

    // Génération d'une citation aléatoire
    randomQuote() {
        let randomTheme = Math.floor(Math.random() * this.theme.length);
        let randomSujet = Math.floor(Math.random() * this.theme[randomTheme].sujet.length);
        let randomVerbe = Math.floor(Math.random() * this.theme[randomTheme].verbe.length);
        let randomComplement = Math.floor(Math.random() * this.theme[randomTheme].complement.length);
        return this.theme[randomTheme].sujet[randomSujet] + " " + this.theme[randomTheme].verbe[randomVerbe] + " " + this.theme[randomTheme].complement[randomComplement];
    }

    // Génération d'une citation aléatoire du thème PSG
    randomQuotePSG() {
        let randomSujet = Math.floor(Math.random() * this.theme[0].sujet.length);
        let randomVerbe = Math.floor(Math.random() * this.theme[0].verbe.length);
        let randomComplement = Math.floor(Math.random() * this.theme[0].complement.length);
        return this.theme[0].sujet[randomSujet] + " " + this.theme[0].verbe[randomVerbe] + " " + this.theme[0].complement[randomComplement];
    }

    // Génération d'une citation aléatoire du thème Stargate
    randomQuoteStargate() {
        let randomSujet = Math.floor(Math.random() * this.theme[1].sujet.length);
        let randomVerbe = Math.floor(Math.random() * this.theme[1].verbe.length);
        let randomComplement = Math.floor(Math.random() * this.theme[1].complement.length);
        return this.theme[1].sujet[randomSujet] + " " + this.theme[1].verbe[randomVerbe] + " " + this.theme[1].complement[randomComplement];
    }
}

const citations = new Citations();

/************************************************************/
/*************** COMMUNICATION AVEC LE DOM ******************/
/************************************************************/

/* Variables et constantes */
let quotesContainer = document.getElementById('quotes-container');
const BtnGo = document.getElementById('btn-go');
const BtnRestart = document.getElementById('btn-restart');

BtnGo.addEventListener("click", () => {
    theme = document.getElementById('theme-select').value;
    nbQuote = document.getElementById('numbers').value;
    
    for (let i = 0; i <= nbQuote - 1; i++) {
        let paragraphe = document.createElement("p");

        if(theme == "PSG") {
            paragraphe.textContent = citations.randomQuotePSG();
        }
        else if(theme == "Stargate") {
            paragraphe.textContent = citations.randomQuoteStargate();
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