import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Collegue, Avis} from '../models';
import {environment} from '../../environments/environment.prod';
const URL_BACKEND = environment.backendUrl;
@Injectable()
export class ColleguesService {
 
  constructor(private _http:HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    console.log(URL_BACKEND)
    // récupérer la liste des collègues côté serveur
    return this._http.get(URL_BACKEND + "/collegues")
    .toPromise()
    .then((data: any) => {
         return data.map((s:any) => new Collegue(s.pseudo, s.urlImage, s.score)); 
    }, (error:any) => {
          // cas erreur
    });
  }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    const httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        };
    // TODO Aimer ou Détester un collègue côté serveur
    return this._http.patch(URL_BACKEND + "/collegues/" + unCollegue.name,
    {

    "action" : avis

    },
    httpOptions)
    .toPromise()
    .then((data : any) =>{
      return data;
    })

  }



}
