import { Component, OnInit } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  group: Group ;
  groups: Group[] = [];
  
  constructor(private GroupService : GroupService) { }

  ngOnInit() {
  	this.GroupService.groupUpdated.subscribe( (lang) => {
        this.groups = this.GroupService.getGroups();
        }
      );
  }

 

}
