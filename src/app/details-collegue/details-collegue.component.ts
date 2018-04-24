import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColleguesService } from '../../app/services/collegues.service';
import { Collegue, Avis } from '../models';

@Component({
  selector: 'app-details-collegue',
  templateUrl: './details-collegue.component.html',
  styleUrls: ['./details-collegue.component.scss']
})
export class DetailsCollegueComponent implements OnInit {

  @Input() collegue : Collegue;
  pseudo: string;
  
  constructor(private route: ActivatedRoute, private sCollegues:ColleguesService) {


    this.pseudo = route.snapshot.paramMap.get("pseudo")
    
    
    console.log(this.pseudo);
   
  }

  aimerActif = true;
 detesterActif = true;

 

  
  // testAvis(avis: Avis){
 
  //  if( avis == Avis.DETESTER){
    
  //    this.collegue.score --;
     
  //  }else{
  //    this.collegue.score ++;
  //  }
 
  // }
  score(event : Avis){
    

    if(this.collegue.score < 1000 && this.collegue.score >-1000 ){
      this.aimerActif = true;
      this.detesterActif = true;
    }


    console.log(this.collegue.score, "this.aimerActif=",this.aimerActif, "this.detesterActif=",this.detesterActif )
    if(event == Avis.AIMER){
      
      if(this.collegue.score >=1000){
        this.aimerActif = false;
        this.detesterActif = true;
      }else{
      this.collegue.score += 10;
      }
      
      
    }else if( event == Avis.DETESTER ){
      if(this.collegue.score <=-1000){
        this.detesterActif = false;
        this.aimerActif = true;
      }else{
      this.collegue.score -= 5;
      }
     
    }

    this.sCollegues.donnerUnAvis(this.collegue, event).subscribe();

    

  }

  ngOnInit() {

    this.sCollegues.getOneCollegues(this.pseudo).subscribe((data:any) => {
      this.collegue = data;
     })

  }

}
