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

    // Génération d'une citation aléatoire du thème choisi par l'utilisateur
    randomQuote(choice) {
        let randomSujet = Math.floor(Math.random() * this.theme[choice].sujet.length);
        let randomVerbe = Math.floor(Math.random() * this.theme[choice].verbe.length);
        let randomComplement = Math.floor(Math.random() * this.theme[choice].complement.length);
        return this.theme[choice].sujet[randomSujet] + " " + this.theme[choice].verbe[randomVerbe] + " " + this.theme[choice].complement[randomComplement];
    }
}

const citations = new Citations();
console.log(citations.randomQuote(0));
console.log(citations.randomQuote(1));

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
            paragraphe.textContent = citations.randomQuote(0);
        }
        else if(theme == "Stargate") {
            paragraphe.textContent = citations.randomQuote(1);
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