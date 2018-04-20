import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../models';
import { ColleguesService } from '../../app/services/collegues.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.scss']
})
export class CollegueComponent implements OnInit {
  @Input() collegue : Collegue;

  aimerActifTest : boolean;

  
  // testAvis(avis: Avis){
 
  //  if( avis == Avis.DETESTER){
    
  //    this.collegue.score --;
     
  //  }else{
  //    this.collegue.score ++;
  //  }
 
  // }
  score(event : Avis){

    if(event == Avis.AIMER){
      this.collegue.score += 10;
      this.sCollegues.donnerUnAvis(this.collegue, event);
      
    }else if( event == Avis.DETESTER ){

      this.collegue.score -= 5;
      this.sCollegues.donnerUnAvis(this.collegue, event);
    }
  }

  aimerActif(){
   if(this.collegue.score <= 1000){
     console.log("bien");
    
     return this.aimerActifTest ;
   
   }else{
     return false
  }

   }

 

  constructor(private sCollegues:ColleguesService) { }

  ngOnInit() {
  }

}
