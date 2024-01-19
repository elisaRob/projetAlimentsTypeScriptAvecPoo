//En TypeScript, vous pouvez créer une énumération en utilisant le mot-clé enum. 
//Une énumération est une collection de constantes nommées.
enum ClassQqualiteNutrinionnelle{
    MAUVAIS="C",
    MOYEN="B",
    BON="A"
}

class Aliments{

    //static pour  être accessible de n'importe ou
    //On est dans un attribut static et pour y accéder on est obligé de passer par la classe.

    public static listeAliments : Aliments[] = [];

    //private => on en veut pas que cela soit modifier à l'extèrieur d'un objet
    //on met _ pour le private
    //readonly => elle ne sont pas modifiable à partie du moment ou elles on été rempli

    protected _nom: string;
    protected _qualiteNutrinionnelle: ClassQqualiteNutrinionnelle;
    public readonly nombreDeCalories: number; 
    public readonly nombreDeLipides: number;
    public readonly nombreDeGlucides: number;
    public readonly nombreDeProteines: number;
    protected _image: string;

    constructor(
        _nom:string,
        _qualiteNutrinionnelle: ClassQqualiteNutrinionnelle,
        nombreDeCalories: number,
        nombreDeLipides: number,
        nombreDeGlucides: number,
        nombreDeProteines: number,
        _image: string
        
        ){
        
       this._nom=_nom;
       this._qualiteNutrinionnelle=_qualiteNutrinionnelle;
       this.nombreDeCalories=nombreDeCalories;
       this.nombreDeLipides=nombreDeLipides;
       this.nombreDeGlucides=nombreDeGlucides;
       this.nombreDeProteines=nombreDeProteines;
       this._image=_image     

       Aliments.listeAliments.push(this)
    }

    get nom() :string{
        return this._nom
    }

    set nom(value:string) {
        this._nom=value
    }

    get qualiteNutrinionnelle() :string{
        return this._qualiteNutrinionnelle
    }

    set qualiteNutrinionnelle(value:ClassQqualiteNutrinionnelle){
        this._qualiteNutrinionnelle=value
    }


    get image() :string{
        return this._image
    }

    set image(value:string) {
        this._image=value
    }
}

let aliment1 = new Aliments("Pomme",ClassQqualiteNutrinionnelle.BON,53,0.2,14,0.3,"pomme.png")
let aliment2 = new Aliments("Salami",ClassQqualiteNutrinionnelle.MAUVAIS,270,26.5,1.3,12,"Salami.png");
console.log(Aliments.listeAliments)