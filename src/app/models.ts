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
    urlImage: string

    constructor(obj: any) {
        Object.assign(this, obj);
      }
}
