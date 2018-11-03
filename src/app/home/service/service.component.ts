import { Component, OnInit } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';
import { AppGlobals } from '../../ app.global';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private GroupService : GroupService , private app : AppGlobals) { }

  groups: Group[] = [];

  ngOnInit() {

      this.groups = this.GroupService.getGroups();


  	  this.GroupService.groupUpdated.subscribe( (lang) => {
        this.groups = this.GroupService.getGroups();
        console.log(this.groups);
        }
      );

 
  }


}
