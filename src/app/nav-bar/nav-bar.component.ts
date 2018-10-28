import { Component, OnInit , Input , OnChanges, SimpleChanges} from '@angular/core';
import { first } from 'rxjs/operators';
import  {GroupService} from '../Service/group.service';
import { Group } from '../Model/group';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private GroupService : GroupService ) { }

  groups: Group[] = [];

    
  ngOnInit() {
    this.GroupService.groupUpdated.subscribe(
    (lang) => {
        this.groups = this.GroupService.getGroups();
        }
    );
      
  }

  

}
