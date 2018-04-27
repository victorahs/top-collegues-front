// TestBed est une classe utilitaire fournie par Angular.
// Elle permet de créer un module Angular spécifiquement pour les tests
// inject est une fonction permettant de bénéficier de 
// l'injection de dépendance dans le cadre de nos tests.
import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,

  } from "@angular/common/http/testing";

  import { RouterTestingModule } from '@angular/router/testing';
  

// La classe compteur

import { ColleguesService } from './collegues.service';


// describe est une fonction du framework Jasmine
// Il définit un ensemble de cas de tests
describe('ColleguesService', () => {

  // beforeEach est une fonction Jasmine exécutée avant chaque cas de test
  beforeEach(() => {

    let httpTestingController: HttpTestingController;
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([])],
      providers: [ColleguesService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  // it est une fonction Jasmine
  // il représente un cas de test
  // inject() permet ici de récupérer une instance du service via l'injection de dépendance.
 


    it("listerCollegues() envoie une requête HTTP en local ou prod",
    inject([ColleguesService], (service: ColleguesService) => {

      // invocation de la méthode recupererTousLesPosts()
      // vérification du corps de la réponse HTTP
      service.listerCollegues().subscribe(liste => {
        // le résultat contient exactement 7 posts
        expect(liste.length).toBe(15);

        
     expect(liste[0]["title"]).toBe("Titre 1");
         expect(liste[1]["title"]).toBe("Titre 2");
      });
  }));

})
