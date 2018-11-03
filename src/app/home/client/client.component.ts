import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../Service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private clientService : ClientService) { }

  clients = [];

  ngOnInit() {
  	console.log("test client component");
  	//this.clients = this.clientService.clients;
  }

}
