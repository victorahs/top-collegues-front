import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models';
import { ColleguesService } from '../../app/services/collegues.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
