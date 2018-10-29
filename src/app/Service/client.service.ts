import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  clients = [
  	{"id" : 1 , "path" : "assets/img/clients/client-1.png"},
  	{"id" : 2 , "path" : "assets/img/clients/client-2.png"},
	  {"id" : 3 , "path" : "assets/img/clients/client-3.png"},
  	{"id" : 4 , "path" : "assets/img/clients/client-4.png"},
  	{"id" : 5 , "path" : "assets/img/clients/client-5.png"}, 
  	{"id" : 6 , "path" : "assets/img/clients/client-6.png"},
  	{"id" : 7 , "path" : "assets/img/clients/client-7.png"}, 
  	{"id" : 8 , "path" : "assets/img/clients/client-8.png"}
];

}
