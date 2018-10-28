import { Component, OnInit } from '@angular/core';
import {FactsService} from '../Service/facts.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  	console.log("home component");
  }

}
