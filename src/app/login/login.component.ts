import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import  {AdminService} from '../Service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AdminService : AdminService) { }



  ngOnInit() {
  }

  onSubmit(f: NgForm) {

    //console.log(f.value);  
    if(f.value.inputUsername == this.AdminService.login && f.value.inputUsername == this.AdminService.pwd ) {
    	//console.log(f.valid);
    	this.AdminService.setLogged(true);

    }
     
    console.log("logged : " + this.AdminService.getLogged());
  }

}
