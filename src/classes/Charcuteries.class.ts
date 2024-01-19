class Charcuteries extends Aliments {
    
    public static listeCharcuterie : Charcuteries[] = []

    constructor(
        nom:string,
        calorie:number,
        lipide:number,
        glucide:number,
        proteine:number,
        image:string
    ){
        super(nom,ClassQqualiteNutrinionnelle.MAUVAIS,calorie,lipide,glucide,proteine,image)
        Charcuteries.listeCharcuterie.push(this)
    }

    afficherAliments(): void {
        console.log(`Charcuterie : ${this.nom}`)
    }

}