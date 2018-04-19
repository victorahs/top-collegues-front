export enum Avis {
AIMER = "AIMER" ,
DETESTER = "DETESTER" 
}

export class Collegue {
 name: string;
 img: string;
 score: number;
    constructor(name: string, img: string, score: number){
        this.name = name;
        this.img = img;
        this.score = score;
        
    }
}

