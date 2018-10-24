import { Component, OnInit } from '@angular/core';
import  {GroupService} from '../../Service/group.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  groups = [];
  group = {};

  constructor(private GroupService : GroupService) { }

  ngOnInit() {
  	this.groups = this.GroupService.groups;
  }

}
