import { Component, OnInit } from '@angular/core';
import { Avis, Collegue } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  colleguesList :Collegue[] = [];
  


  choix = " ";
 testAvis(avis: Avis){

  if( avis == Avis.DETESTER){
    this.choix = "vous avez cliquer sur détester";
  }else{
    this.choix = "Vous avez cliquer sur aimer";
  }

 }

  constructor() {

    this.colleguesList.push( new Collegue("paul", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png", 5));
    this.colleguesList.push( new Collegue("pierre", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png", 6));
    this.colleguesList.push( new Collegue("valerie", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png", 30));
    this.colleguesList.push( new Collegue("jean", "http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png", 50));

   }

  ngOnInit() {
  }

}
