"use strict";
class Charcuteries extends Aliments {
    constructor(nom, calorie, lipide, glucide, proteine, image) {
        super(nom, ClassQqualiteNutrinionnelle.MAUVAIS, calorie, lipide, glucide, proteine, image);
        Charcuteries.listeCharcuterie.push(this);
    }
    afficherAliments() {
        console.log(`Charcuterie : ${this.nom}`);
    }
}
Charcuteries.listeCharcuterie = [];
//# sourceMappingURL=Charcuteries.class.js.map