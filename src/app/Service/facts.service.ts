import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor() { }

  facts = {
  		"clients" : 100,
  		"projets" : 20,
  		"hourSupport" : 23,
  		"hardWorkers" : 28
  };
}
