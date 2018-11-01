import { Component, OnInit} from '@angular/core';
import  {AdminService} from '../Service/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit   {

  constructor(private AdminService : AdminService , private router:Router) { }

  

  ngOnInit() {
  
      if (!this.AdminService.getLogged()) {
            this.router.navigate(['login']);
        } 

    }
   

}
