import { Component, OnInit, OnDestroy  } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy  {

	group: Group ;
  groups: Group[] = [];

   id : number ;
  private sub: any;

  constructor(private GroupService : GroupService ,  private route: ActivatedRoute) { }

  ngOnInit() {
  	
  /*  this.GroupService.groupUpdated.subscribe( (lang) => {
        this.groups = this.GroupService.getGroups();
        }
      );  */
    
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
 
         this.GroupService.groups.forEach( (group) => {
           console.log("aaa" + group.id);
           if (group.id == this.id) {
            this.group = group ;
           }
         });    
    });


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
