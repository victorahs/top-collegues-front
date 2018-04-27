import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { BandeauComponent } from "./bandeau/bandeau.component";
import { AvisComponent } from "./avis/avis.component";
import { CollegueComponent } from "./collegue/collegue.component";
import { ListeColleguesComponent } from "./liste-collegues/liste-collegues.component";
import { HttpClientModule } from "@angular/common/http";
import { ColleguesService } from "./services/collegues.service";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { DetailsCollegueComponent } from "./details-collegue/details-collegue.component";
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule }   from '@angular/forms';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { DernierAvisComponent } from './dernier-avis/dernier-avis.component';

const appRoutes: Routes = [
  { path: "accueil", component: AccueilComponent },

  { path: "demo", component: DemoComponent },

  { path: "", redirectTo: "/accueil", pathMatch: "full" },
  
  { path : "collegues/ajouter", component: AjouterUnCollegueComponent}, 

  { path: "collegues/:pseudo", component: DetailsCollegueComponent }

  
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponent,
    AvisComponent,
    CollegueComponent,
    ListeColleguesComponent,
    AccueilComponent,
    DetailsCollegueComponent,
    ScorePipe,
    FilterPipe,
    AjouterUnCollegueComponent,
    DernierAvisComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ColleguesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
