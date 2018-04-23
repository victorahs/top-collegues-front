import { Component, OnInit } from '@angular/core';
import { AjoutCollegue } from '../models';

@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {
  ajoutCollegue : AjoutCollegue = new AjoutCollegue(null);
  submit() {
    console.log(this.ajoutCollegue);
}
  constructor() { }

  ngOnInit() {
  }

}
