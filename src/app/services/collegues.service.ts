import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Collegue, Avis, AjoutCollegue} from '../models';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const URL_BACKEND = environment.backendUrl;
@Injectable()
export class ColleguesService {
 
  constructor(private _http:HttpClient, private router: Router) { }

  // listerCollegues():Promise<Collegue[]>  {
  //   console.log(URL_BACKEND)
  //   // récupérer la liste des collègues côté serveur
  //   return this._http.get(URL_BACKEND + "/collegues")
  //   .toPromise()
  //   .then((data: any) => {
  //        return data.map((s:any) => new Collegue(s)); 
  //   }, (error:any) => {
  //         // cas erreur
  //   });
  // }

  listerCollegues():Observable<Collegue[]>{{
    return this._http.get(URL_BACKEND + "/collegues")
       
       .map((data: any) => {
           return data.map((s:any) => new Collegue(s)); 
       }, (error:any) => {
     
       });
   
    

      }

  }

  // donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
  //   const httpOptions = {
  //         headers: new HttpHeaders({
  //           "Content-Type": "application/json"
  //         })
  //       };
  //   // TODO Aimer ou Détester un collègue côté serveur
  //   return this._http.patch(URL_BACKEND + "/collegues/" + unCollegue.pseudo,
  //   {

  //   "action" : avis

  //   },
  //   httpOptions)
  //   .toPromise()
  //   .then((data : any) =>{
  //     return data;
  //   })

  // }

  donnerUnAvis(unCollegue:Collegue, avis:Avis):Observable<Collegue>{
    const httpOptions = {
              headers: new HttpHeaders({
                "Content-Type": "application/json"
              })
             };

             return this._http.patch<Collegue>(URL_BACKEND + "/collegues/" + unCollegue.pseudo,
    {

     "action" : avis

    },
     httpOptions)
   
    .do((data : any) =>{
      return data;
   })




  }

  // //TODO à completer
  // getOneCollegues(pseudo: string):Promise<Collegue>  {
  //   console.log(URL_BACKEND)
  //   // récupérer la liste des collègues côté serveur

  //   return this._http.get(URL_BACKEND + "/collegues/" + pseudo)
  //   .toPromise()
  //   .then((data: any) => {
  //        return data;
  //   }, (error:any) => {
  //         // cas erreur
  //   });
  // }


  getOneCollegues(pseudo: string):Observable<Collegue>  {
    
    

    return this._http.get(URL_BACKEND + "/collegues/" + pseudo)

    .do((data: any) => {
         return data;
    }, (error:any) => {
          // cas erreur
    });
  }


  // envoyer un collegue au serveur
  // sendCollegue(unAjoutCollegue:AjoutCollegue):Promise<AjoutCollegue>  {
  //   const httpOptions = {
  //         headers: new HttpHeaders({
  //           "Content-Type": "application/json"
  //         })
  //       };
  //   // TODO Aimer ou Détester un collègue côté serveur
  //   return this._http.post(URL_BACKEND + "/collegues/ajouter", 
  //   {

  //   "matricule" : unAjoutCollegue.matricule,
  //   "pseudo" : unAjoutCollegue.pseudo,
  //   "url" : unAjoutCollegue.url




  //   },
  //   httpOptions)
  //   .toPromise()
  //   .then((data : any) =>{
  //     this.router.navigate(['/accueil']);
  //     return data;
      
  //   })

  // }

  //TODO envoyer un collegue au serveur
  sendCollegue(unAjoutCollegue:AjoutCollegue):Observable<AjoutCollegue>  {
    const httpOptions = {
          headers: new HttpHeaders({
            "Content-Type": "application/json"
          })
        };
    // TODO Aimer ou Détester un collègue côté serveur
    return this._http.post(URL_BACKEND + "/collegues/ajouter", 
    {

    "matricule" : unAjoutCollegue.matricule,
    "pseudo" : unAjoutCollegue.pseudo,
    "url" : unAjoutCollegue.url




    },
    httpOptions)
    
    .do((data : any) =>{
      this.router.navigate(['/accueil']);
      return data;
      
    })

  }



}
