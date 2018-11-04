import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import { first } from 'rxjs/operators';
import { ToastrManager } from 'ng6-toastr-notifications';
import  {GroupService} from '../../../Service/group.service';
import { Group } from '../../../Model/group';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})
export class AddserviceComponent implements OnInit {

	form: FormGroup;
    op = false;


  constructor(private formBuilder: FormBuilder,
    public toastr: ToastrManager,
             @Inject(MAT_DIALOG_DATA) public data: any,
            private GroupService: GroupService,
           private dialogRef: MatDialogRef<AddserviceComponent>
) { }

  ngOnInit() {

  	this.form = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        gerant: ['', Validators.required],
        logo: ['', Validators.required],
        adresse: ['', Validators.required],
        phone: ['', Validators.compose([Validators.pattern('^[0-9]*$'), Validators.required])],
        email: ['', Validators.compose([Validators.email, Validators.required])]
        });

  }

    submit(form) {
    let val = new Group(
      this.form.value.name,
      //this.form.value.description,
      this.form.value.gerant,
      this.form.value.email,
     // this.form.value.logo,
      this.form.value.phone,
      this.form.value.adresse
      
      
    );

    console.log(val);
 
     this.GroupService.addGroup(val).pipe(first()).subscribe(() => {
      // this.loadAllValidators();
      this.op = true;
      this.dialogRef.close(this.op);
      this.showSuccess('Data saved !');
      }, err => {
        this.op = false;
          this.showError(err.error.message);
      });

  }

  errorMail() {
    if (this.form.get('email').invalid) {
      return "Invalide Email";
    }
  }

  errorPhone() {
    if (this.form.get('phone').invalid) {
      return "Invalide Phone Number";
    }
  }

  showError(error: string) {
    if (error) {
        this.toastr.errorToastr(error, 'Oops!');

    } else {
        this.toastr.errorToastr('Something went wrong !', 'Oops!')
    }
}

showSuccess(msg: string) {
  if (msg) {
      this.toastr.successToastr(msg, 'Good!');
  }
}




  

}
