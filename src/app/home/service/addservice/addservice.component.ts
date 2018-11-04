import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
//import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

//	form: FormGroup;
  //  op = false;


  constructor(//private formBuilder: FormBuilder,
   // private toastr: ToastrManager,
            // @Inject(MAT_DIALOG_DATA) public data: any,
           // private validatorService: ValidatorService,
          //  private dialogRef: MatDialogRef<AddserviceComponent>
) { }

  ngOnInit() {

  /*	this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        isActive: ['']
        });
*/
  } 


  

}
