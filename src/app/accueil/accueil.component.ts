import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { ColleguesService } from '../../app/services/collegues.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
collegues : Array<Collegue>
  constructor(private sCollegues:ColleguesService) { }

  ngOnInit() {
    this.sCollegues.listerCollegues().then((data:any) => {
      this.collegues = data;
     })
  }

}
