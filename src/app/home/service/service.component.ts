import { Component, OnInit , Inject} from '@angular/core';
import  {GroupService} from '../../Service/group.service';
import { first } from 'rxjs/operators';
import { Group } from '../../Model/group';
import { AppGlobals } from '../../ app.global';
import  {AdminService} from '../../Service/admin.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddserviceComponent} from './addservice/addservice.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private GroupService : GroupService , private app : AppGlobals 
    , private AdminService : AdminService , public dialog: MatDialog) { }

  groups: Group[] = [];
  logged = false;


  ngOnInit() {

      this.groups = this.GroupService.getGroups();
      this.logged = this.AdminService.getLogged();

  	  this.GroupService.groupUpdated.subscribe( (lang) => {
        this.groups = this.GroupService.getGroups();
        console.log(this.groups);
        }
      );

  }

    openDialog() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true; 

        let dialogRef = this.dialog.open(AddserviceComponent, dialogConfig );
       
          dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.loadAllGroups();
            } else {
                return false;
            }
            
            });  

    }

    loadAllGroups() {
     this.GroupService.getAllGroups().pipe(first()).subscribe(groups => {
         this.groups = groups;
        this.GroupService.setGroups(groups);
    });

    }


}
