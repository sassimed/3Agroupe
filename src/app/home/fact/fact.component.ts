import { Component, OnInit } from '@angular/core';
import {FactsService} from '../../Service/facts.service';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  constructor(private factService : FactsService) { }

  facts = {};

  ngOnInit() {
  	this.facts = this.factService.facts ;
  }

}
