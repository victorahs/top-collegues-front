import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Avis, Vote } from '../models';
import { ColleguesService } from '../services/collegues.service';

@Component({
  selector: 'app-dernier-avis',
  templateUrl: './dernier-avis.component.html',
  styleUrls: ['./dernier-avis.component.scss']
})
export class DernierAvisComponent implements OnInit {

  actionSubject:Subscription
  
  avis:string = "Aucun vote actuellement"
  constructor(private sCollegue:ColleguesService) {
    this.actionSubject = this.sCollegue.actionObservable.subscribe(
      (data:Vote) => {
          console.log(data)
          if(data.avis === Avis.AIMER){
            this.avis ="J'aime " + data.collegue.pseudo
          }else if(data.avis === Avis.DETESTER){
            this.avis = "Je n'aime pas  " + data.collegue.pseudo
          }
      },
      error => {
         
      },
      () => {
      
      });  
    }
  ngOnInit() {
  }

  ngOnDestroy() {
 
    this.actionSubject.unsubscribe();      
  }

}
