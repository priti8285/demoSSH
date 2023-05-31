import { Component } from '@angular/core';
import {FormGroup , FormControlName,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
  
  loginForm = new FormGroup({
    name: new FormControl('' ,[Validators.required,]),
    email: new FormControl('' ,[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  })
 hide =true;
  // ^[a-z0-9_-]{8,15}$"

  userLogin(){
  console.log(this.loginForm.value);
  }

get name(){
return this.loginForm.get('name');
}
get email(){
  return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
    }
}
