import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

   groups = [
  	{"name" : "Service et entretient" , "path" : "img/3a/construction.png" ,  "text" : "Des panneaux à installer ou une ancienne pancarte à renouveller, on se s'occupe de vous."},
  	{"name" : "Cuisine et dressing" , "path" : "img/3a/cuisine.png" ,  "text" : " Pour des raisons domestiques ou proffessionel le groupe 3A vous installe la cuisine dont vous avez besoin."},
	{"name" : "Bâtiment et Construction" , "path" : "img/3a/services.png" ,  "text" : "Besoin d'un immeuble ou d'unemaison ? Il vous suffit de demander."},
	{"name" : "Promotion Immobliére" , "path" : "img/3a/batiments.png" ,  "text" : " 3A vous trouveras le local ou la maison de vos rêves qui vous convient."}
	];

}
