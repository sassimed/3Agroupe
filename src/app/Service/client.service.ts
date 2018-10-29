import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  clients = [
  	{"id" : 1 , "path" : "src/assets/img/clients/client-1.png"},
  	{"id" : 2 , "path" : "src/assets/img/clients/client-2.png"},
	  {"id" : 3 , "path" : "src/assets/img/clients/client-3.png"},
  	{"id" : 4 , "path" : "src/assets/img/clients/client-4.png"},
  	{"id" : 5 , "path" : "src/assets/img/clients/client-5.png"}, 
  	{"id" : 6 , "path" : "src/assets/img/clients/client-6.png"},
  	{"id" : 7 , "path" : "src/assets/img/clients/client-7.png"}, 
  	{"id" : 8 , "path" : "src/assets/img/clients/client-8.png"}
];

}
