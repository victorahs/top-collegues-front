import { Component, OnInit } from '@angular/core';
import { Avis } from '../models';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  choix = " ";
 testAvis(avis: Avis){

  if( avis == "detester"){
    this.choix = "vous avez cliquer sur détester";
  }else{
    this.choix = "Vous avez cliquer sur aimer";
  }

 }

  constructor() { }

  ngOnInit() {
  }

}
