"use strict";
new Fruits("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
new Fruits("Poire", 49, 0.1, 15, 0.4, "poire.png");
new Charcuteries("Salami", 270, 26.5, 1.3, 12, "salami.png");
new Charcuteries("Saucisson", 300, 33.1, 1.9, 27.6, "saucisson.png");
const recuperationListeDesAliments = document.querySelector(".listeDesAliments");
const recuperationTypesAliments = document.querySelector(".typesAliments");
afficherAliments("Tous");
function genererBaliseAliments(aliment) {
    return `
    <tr>
        <td>${aliment.nom}</td>
        <td>${aliment.nombreDeLipides}</td>
        <td>${aliment.nombreDeGlucides}</td>
        <td>${aliment.nombreDeProteines}</td>
        <td>${aliment.qualiteNutrinionnelle}</td>
        <td><img src="images/${aliment.image}"></td>
    </tr>
`;
}
function afficherAliments(selectedValue) {
    let listeAlimentBalise = "";
    for (let aliment of Aliments.listeAliments) {
        // Filtrer les aliments en fonction de la qualité nutritionnelle sélectionnée
        if ((selectedValue === "Mauvais" && aliment.qualiteNutrinionnelle === ClassQqualiteNutrinionnelle.MAUVAIS) ||
            (selectedValue === "Moyen" && aliment.qualiteNutrinionnelle === ClassQqualiteNutrinionnelle.MOYEN) ||
            (selectedValue === "Bon" && aliment.qualiteNutrinionnelle === ClassQqualiteNutrinionnelle.BON) ||
            selectedValue === "Tous") {
            listeAlimentBalise += genererBaliseAliments(aliment);
        }
    }
    recuperationListeDesAliments.innerHTML = listeAlimentBalise;
}
recuperationTypesAliments.addEventListener("change", () => {
    const recuperationTypesAlimentsValeur = recuperationTypesAliments.value;
    afficherAliments(recuperationTypesAlimentsValeur);
});
//# sourceMappingURL=main.js.map