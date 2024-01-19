"use strict";
class Fruits extends Aliments {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClassQqualiteNutrinionnelle.BON, calorie, lipide, glucide, proteine, image);
        Fruits.listeFruits.push(this);
    }
    afficherAliments() {
        console.log("Fruits : " + this.nom);
        this.afficherValeursNutritive();
    }
}
Fruits.listeFruits = [];
//# sourceMappingURL=Fruits.class.js.map