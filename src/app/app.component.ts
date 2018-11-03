import { Component , OnInit} from '@angular/core';
import { first } from 'rxjs/operators';
import { Group } from './Model/group';
import  {GroupService} from './Service/group.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'my-app';
  groups: Group[] = [];

  

  constructor(private GroupService : GroupService ) { }

  ngOnInit() {

    console.log("app component");
  	this.loadAllGroups();

  }


  loadAllGroups() {
     this.GroupService.getAllGroups().pipe(first()).subscribe(groups => {
     	  this.groups = groups;
        this.GroupService.setGroups(groups);
    });

  }


}
