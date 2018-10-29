import { Component, OnInit , OnDestroy } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';
import { AppGlobals } from '../../ app.global';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit , OnDestroy{

	group: Group ;
 // groups: Group[] = [];
  id : number ;
  private sub: any;

  constructor(private GroupService : GroupService ,  private route: ActivatedRoute, public app: AppGlobals) { }

  ngOnInit() {
/*  	this.GroupService.groupUpdated.subscribe( (lang) => {
        this.groups = this.GroupService.getGroups();
        }
      );  */

  	this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.GroupService.groups.forEach( (group) => {
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
