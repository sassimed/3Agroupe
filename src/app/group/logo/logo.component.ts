import { Component, OnInit , OnDestroy } from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit , OnDestroy{

	groups = [];
	group = {};
  id : number ;
  private sub: any;

  constructor(private GroupService : GroupService ,  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.groups = this.GroupService.groups;
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

       this.groups.forEach( (group) => {
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
