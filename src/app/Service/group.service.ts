import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

   groups = [
  	{ "id" : 1 , "mail" : "info@gmail.com" , "phone" : 72111222 , "location" : "nabeul",
  	 "name" : "Service et entretient" , "path" : "../img/3a/construction.png" ,  
  	 "text" : "Des panneaux à installer ou une ancienne pancarte à renouveller, on se s'occupe de vous."
  	},
  	{"id" : 2 , "mail" : "info@gmail.com" , "phone" : 72111222 , "location" : "tunis",
  	 "name" : "Cuisine et dressing" , "path" : "../img/3a/cuisine.png" ,  
  	 "text" : " Pour des raisons domestiques ou proffessionel le groupe 3A vous installe la cuisine dont vous avez besoin."
  	},
	{"id" : 3 , "mail" : "info@gmail.com" , "phone" : 72111222 , "location" : "tunis",
	 "name" : "Bâtiment et Construction" , "path" : "../img/3a/services.png" ,  
	 "text" : "Besoin d'un immeuble ou d'unemaison ? Il vous suffit de demander."
	},
	{"id" : 4 , "mail" : "info@gmail.com" , "phone" : 72111222 , "location" : "tunis",
	 "name" : "Promotion Immobliére" , "path" : "../img/3a/batiments.png" ,  
	 "text" : " 3A vous trouveras le local ou la maison de vos rêves qui vous convient."
	}
	];

  /* getGroup(id) {
    this.groups.forEach( (group) => {
     if (group.id == id) {
      return group;
     }
  });
  } */

}
