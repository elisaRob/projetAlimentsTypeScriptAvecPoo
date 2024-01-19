class Fruits extends Aliments {

    public static listeFruits:Fruits[]=[]

    constructor(
        nom:string,
        calorie:number,
        lipide:number,
        glucide:number,
        proteine:number,
        image:string){
            super(nom,ClassQqualiteNutrinionnelle.BON,calorie,lipide,glucide,proteine,image);
            Fruits.listeFruits.push(this)
    }
    afficherAliments(): void {
        console.log("Fruits : " + this.nom);
        this.afficherValeursNutritive();
    }
   
}