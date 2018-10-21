import { Component, OnInit } from '@angular/core';
import  {GroupService} from '../Service/group.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private GroupService : GroupService) { }

  groups = [];

  ngOnInit() {
  	this.groups = this.GroupService.groups;
  }

}
