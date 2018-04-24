import { Component, OnInit } from '@angular/core';
import { AjoutCollegue } from '../models';
import { ColleguesService } from '../../app/services/collegues.service';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {
  ajoutCollegue : AjoutCollegue = new AjoutCollegue(null);
  submit() { 
    this.sCollegues.sendCollegue(this.ajoutCollegue).then((data:any) => {
      
      this.ajoutCollegue = data;
     })
   }
    

  constructor(private sCollegues:ColleguesService) { }

  ngOnInit() {
  }

}
