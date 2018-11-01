import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import  {GroupService} from '../Service/group.service';
import { Group } from '../Model/group';
import { Subject } from 'rxjs';
import  {AdminService} from '../Service/admin.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private GroupService : GroupService , private AdminService : AdminService ) { }

  groups: Group[] = [];
  logged = false;
    
  ngOnInit() {
    this.GroupService.groupUpdated.subscribe(
    (lang) => {
        this.groups = this.GroupService.getGroups();
        }
    );

    this.AdminService.loggedUpdated.subscribe(
    (lang) => {
        this.logged = this.AdminService.getLogged();
        }
    );

    
      
  }

  

}
