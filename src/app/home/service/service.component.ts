import { Component, OnInit } from '@angular/core';
import  {GroupService} from '../../Service/group.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private GroupService : GroupService) { }

  groups = [];

  ngOnInit() {
  	this.groups = this.GroupService.groups;
  }

}
