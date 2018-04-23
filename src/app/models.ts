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
  emai: string
  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
