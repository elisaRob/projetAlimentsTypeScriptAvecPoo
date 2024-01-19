"use strict";
//En TypeScript, vous pouvez créer une énumération en utilisant le mot-clé enum. 
//Une énumération est une collection de constantes nommées.
var ClassQqualiteNutrinionnelle;
(function (ClassQqualiteNutrinionnelle) {
    ClassQqualiteNutrinionnelle["MAUVAIS"] = "C";
    ClassQqualiteNutrinionnelle["MOYEN"] = "B";
    ClassQqualiteNutrinionnelle["BON"] = "A";
})(ClassQqualiteNutrinionnelle || (ClassQqualiteNutrinionnelle = {}));
class Aliments {
    constructor(_nom, _qualiteNutrinionnelle, nombreDeCalories, nombreDeLipides, nombreDeGlucides, nombreDeProteines, _image) {
        this._nom = _nom;
        this._qualiteNutrinionnelle = _qualiteNutrinionnelle;
        this.nombreDeCalories = nombreDeCalories;
        this.nombreDeLipides = nombreDeLipides;
        this.nombreDeGlucides = nombreDeGlucides;
        this.nombreDeProteines = nombreDeProteines;
        this._image = _image;
        Aliments.listeAliments.push(this);
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get qualiteNutrinionnelle() {
        return this._qualiteNutrinionnelle;
    }
    set qualiteNutrinionnelle(value) {
        this._qualiteNutrinionnelle = value;
    }
    get image() {
        return this._image;
    }
    set image(value) {
        this._image = value;
    }
    afficherValeursNutritive() {
        console.log("Valeurs nutritionelles : ");
        console.log("Calories : " + this.nombreDeCalories);
    }
}
//static pour  être accessible de n'importe ou
//On est dans un attribut static et pour y accéder on est obligé de passer par la classe.
Aliments.listeAliments = [];
//# sourceMappingURL=Aliments.class.js.map