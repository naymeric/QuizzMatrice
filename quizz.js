const prompt = require('prompt-sync')()

// let score = 0
// let question = ["Question 1 : Quel est le nom de l'Anneau ?", "Question 2 : Qui est le roi du Gondor ?", "Question 3 : Quel est le nom de la communauté qui accompagne Frodo ?", "Question 4 : Quelle créature aide Frodo et Sam dans leur voyage ?", "Question 5 : Où se trouve le Mont Doom (Mont Destin) ?"]
// let reponse = ["L'Anneau Unique", "Aragorn", "La Fraternité de l'Anneau", "Gollum", "Dans le Mordor"]
// let lettreReponse = ["A", "B", "A", "C", "B"]
// let choix = ["A) L'Anneau Unique B) L'Anneau Magique C) L'Anneau d'Or D) L'Anneau de Pouvoir", "A) Legolas B) Aragorn C) Boromir D) Faramir", "A) La Fraternité de l'Anneau B) Les Héros C) Les Gardiens de l'Anneau D) La Ligue des Hobbits", "A) Un dragon B) Un troll C) Gollum D) Un orc", "A) Rivendell B) Mordor C) Hobbiton D) Isengard"]

// function quizz() {
//     for (let i = 0; i < question.length; i++) {
//             console.log(question[i])
//             console.log(choix[i])
//             let utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//             while (utilisateur != "A" && utilisateur != "B" && utilisateur != "C" && utilisateur != "D") {
//                 console.log("Vous vous êtes trompés !")
//                 utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//             }
//             if (utilisateur == lettreReponse[i]) {
//                 score++
//                 console.log("Réponse correcte !")
//             } else {
//                 console.log("Réponse incorrecte ! La bonne réponse était " + reponse[i])
//             }
//         }
//     return "Merci d'avoir joué avec moi. Votre score est de : "+score+" point(s)."
// }

// console.log(quizz())


//***********************************************VERSION avec les fonctions et en utilisant un tableau dans un tableau (le plus optimisé)******************************************************

// let score = 0
// let question = ["Question 1 : Quel est le nom de l'Anneau ?", "Question 2 : Qui est le roi du Gondor ?", "Question 3 : Quel est le nom de la communauté qui accompagne Frodo ?", "Question 4 : Quelle créature aide Frodo et Sam dans leur voyage ?", "Question 5 : Où se trouve le Mont Doom (Mont Destin) ?"]
// let reponse = ["L'Anneau Unique", "Aragorn", "La Fraternité de l'Anneau", "Gollum", "Dans le Mordor"]
// let lettreReponse = ["A", "B", "A", "C", "B"]

// //tableau dans un tableau
// let choix = [
//     ["A) L'Anneau Unique", "B) L'Anneau Magique", "C) L'Anneau d'Or", "D) L'Anneau de Pouvoir"],
//     ["A) Legolas", "B) Aragorn", "C) Boromir", "D) Faramir"],
//     ["A) La Fraternité de l'Anneau", "B) Les Héros", "C) Les Gardiens de l'Anneau", "D) La Ligue des Hobbits"],
//     ["A) Un dragon", "B) Un troll", "C) Gollum", "D) Un orc"],
//     ["A) Rivendell", "B) Mordor", "C) Hobbiton", "D) Isengard"]
// ]

// //fonction servant à afficher les questions
// function afficheQuestion(numQuestion) {
//     console.log(question[numQuestion])
// }

// //fonction servant à afficher les choix possibles de réponses pour l'utilisateur et utilisant un boucle for j pour parcourir les choix dans le sous tableau
// function afficheChoix(tabChoix) {
//     for (let j = 0; j < tabChoix.length; j++) {
//         console.log(tabChoix[j])
//     }
// }

// //fonction pour afficher le prompt de l'utilisateur et permettant de gérer les règles d'erreurs d'entrée de l'utilisateur
// function promptUtilisateur () {
//     let utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     while (utilisateur != "A" && utilisateur != "B" && utilisateur != "C" && utilisateur != "D") {
//         console.log("Vous vous êtes trompés !")
//         utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     }
//     return utilisateur
// }


// //boucle for servant à toutes les fonctions
// for (let i = 0; i < question.length; i++) {
//     afficheQuestion(i)
//     afficheChoix(choix[i])
//     if (promptUtilisateur() == lettreReponse[i]) {
//         score++
//         console.log("Réponse correcte !")
//     } else {
//         console.log("Réponse incorrecte ! La bonne réponse était " + reponse[i])
//     }
// }
// console.log("Merci d'avoir joué avec moi. Votre score est de : " + score + " point(s).")


//**************************************************VERSION SIMPLE AVEC LES FONCTIONS (et sans tableau dans le tableau)******************************************* 

// let score = 0
// let question = ["Question 1 : Quel est le nom de l'Anneau ?", "Question 2 : Qui est le roi du Gondor ?", "Question 3 : Quel est le nom de la communauté qui accompagne Frodo ?", "Question 4 : Quelle créature aide Frodo et Sam dans leur voyage ?", "Question 5 : Où se trouve le Mont Doom (Mont Destin) ?"]
// let reponse = ["L'Anneau Unique", "Aragorn", "La Fraternité de l'Anneau", "Gollum", "Dans le Mordor"]
// let lettreReponse = ["A", "B", "A", "C", "B"]
// let choix = ["A) L'Anneau Unique B) L'Anneau Magique C) L'Anneau d'Or D) L'Anneau de Pouvoir", "A) Legolas B) Aragorn C) Boromir D) Faramir", "A) La Fraternité de l'Anneau B) Les Héros C) Les Gardiens de l'Anneau D) La Ligue des Hobbits", "A) Un dragon B) Un troll C) Gollum D) Un orc", "A) Rivendell B) Mordor C) Hobbiton D) Isengard"]

// //fonction pour afficher les questions
// function afficheQuestion(numQuestion) {
//     console.log(question[numQuestion])
// }

// //fonction pour afficher les choix de réponses possibles
// function afficheChoix(letChoix) {
//     console.log(choix[letChoix])
// }

// //fonction pour afficher le prompt de l'utilisateur et permettant de gérer les règles d'erreurs d'entrée de l'utilisateur
// function promptUtilisateur() {
//     let utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     while (utilisateur != "A" && utilisateur != "B" && utilisateur != "C" && utilisateur != "D") {
//         console.log("Vous vous êtes trompés !")
//         utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     }
//     return utilisateur
// }

// for (let i = 0; i < question.length; i++) {
//     afficheQuestion(i)
//     afficheChoix(i)
//     if (promptUtilisateur() == lettreReponse[i]) {
//         score++
//         console.log("Réponse correcte !")
//     } else {
//         console.log("Réponse incorrecte ! La bonne réponse était " + reponse[i])
//     }
// }
// console.log("Merci d'avoir joué avec moi. Votre score est de : " + score + " point(s).")

//****************************************VERSION simplifiée avec tableau dans le tableau************************************************* */

// let score = 0
// let question = ["Question 1 : Quel est le nom de l'Anneau ?", "Question 2 : Qui est le roi du Gondor ?", "Question 3 : Quel est le nom de la communauté qui accompagne Frodo ?", "Question 4 : Quelle créature aide Frodo et Sam dans leur voyage ?", "Question 5 : Où se trouve le Mont Doom (Mont Destin) ?"]
// let reponse = ["L'Anneau Unique", "Aragorn", "La Fraternité de l'Anneau", "Gollum", "Dans le Mordor"]
// let lettreReponse = ["A", "B", "A", "C", "B"]

// //Tableau dans un tableau
// let choix = [
//     ["A) L'Anneau Unique", "B) L'Anneau Magique", "C) L'Anneau d'Or", "D) L'Anneau de Pouvoir"],
//     ["A) Legolas", "B) Aragorn", "C) Boromir", "D) Faramir"],
//     ["A) La Fraternité de l'Anneau", "B) Les Héros", "C) Les Gardiens de l'Anneau", "D) La Ligue des Hobbits"],
//     ["A) Un dragon", "B) Un troll", "C) Gollum", "D) Un orc"],
//     ["A) Rivendell", "B) Mordor", "C) Hobbiton", "D) Isengard"]
// ]


// for (let i = 0; i < question.length; i++) {
//     console.log(question[i])

//     for (let j = 0; j < choix.length - 1; j++) {
//         console.log(choix[i][j])
//     }
//     console.log("")
//     let utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     while (utilisateur != "A" && utilisateur != "B" && utilisateur != "C" && utilisateur != "D") {
//         console.log("Vous vous êtes trompés !")
//         console.log("")
//         utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
//     }
//     if (utilisateur == lettreReponse[i]) {
//         score++
//         console.log("Réponse correcte !")
//         console.log("")
//     } else {
//         console.log("Réponse incorrecte ! La bonne réponse était " + reponse[i])
//         console.log("")
//     }
// }
// console.log("")
// console.log("Merci d'avoir joué avec moi.")
// console.log("")
// console.log("Votre score est de : " + score + " point(s).")


//***********************************************VERSION avec les fonctions et en utilisant un tableau dans un tableau (le plus optimisé)******************************************************

let score = 0
let question = ["Question 1 : Quel est le nom de l'Anneau ?", "Question 2 : Qui est le roi du Gondor ?", "Question 3 : Quel est le nom de la communauté qui accompagne Frodo ?", "Question 4 : Quelle créature aide Frodo et Sam dans leur voyage ?", "Question 5 : Où se trouve le Mont Doom (Mont Destin) ?"]
let reponse = ["L'Anneau Unique", "Aragorn", "La Fraternité de l'Anneau", "Gollum", "Dans le Mordor"]
let lettreReponse = ["A", "B", "A", "C", "B"]

//tableau dans un tableau
let choix = [
    ["A) L'Anneau Unique", "B) L'Anneau Magique", "C) L'Anneau d'Or", "D) L'Anneau de Pouvoir"],
    ["A) Legolas", "B) Aragorn", "C) Boromir", "D) Faramir"],
    ["A) La Fraternité de l'Anneau", "B) Les Héros", "C) Les Gardiens de l'Anneau", "D) La Ligue des Hobbits"],
    ["A) Un dragon", "B) Un troll", "C) Gollum", "D) Un orc"],
    ["A) Rivendell", "B) Mordor", "C) Hobbiton", "D) Isengard"]
]

//fonction servant à afficher les questions
function afficheQuestion(numQuestion) {
    console.log(question[numQuestion])
}

//fonction servant à afficher les choix possibles de réponses pour l'utilisateur et utilisant un boucle for j pour parcourir les choix dans le sous tableau
function afficheChoix(tabChoix) {
    for (let j = 0; j < tabChoix.length; j++) {
        console.log(tabChoix[j])
    }
}

//fonction pour afficher le prompt de l'utilisateur et permettant de gérer les règles d'erreurs d'entrée de l'utilisateur
function promptUtilisateur () {
    let utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
    while (utilisateur != "A" && utilisateur != "B" && utilisateur != "C" && utilisateur != "D") {
        console.log("Vous vous êtes trompés !")
        utilisateur = prompt("Saisissez votre réponse entre A, B, C ou D ")
    }
    return utilisateur
}


//boucle for servant à toutes les fonctions
for (let i = 0; i < question.length; i++) {
    afficheQuestion(i)
    afficheChoix(choix[i])
    if (promptUtilisateur() == lettreReponse[i]) {
        score++
        console.log("Réponse correcte !")
    } else {
        console.log("Réponse incorrecte ! La bonne réponse était " + reponse[i])
    }
}
console.log("Merci d'avoir joué avec moi. Votre score est de : " + score + " point(s).")

