export enum Avis {
  AIMER = "AIMER",
  DETESTER = "DETESTER"
}

export class Collegue {
  pseudo: string;
  urlImage: string;
  score: number;
  adresse: string;
  nom: string;
  prenom: string;
  email: string
  constructor(obj: any) {
    Object.assign(this, obj);
  }
}

export class AjoutCollegue{
    matricule:string; 
    pseudo:string; 
    url: string

    constructor(obj: any) {
        Object.assign(this, obj);
      }


}

export class Vote{
    
  constructor(public collegue:Collegue, public avis:Avis, public score:number){
 
  }

  get Collegue(){
      return this.collegue;
  }

  get Avis(){
      return this.avis;
  }
  get Note(){
    return this.score;
  }
}
