import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){

  }

ngOnInit(): void {

  localStorage.setItem('username','ourWebsite');
  sessionStorage.setItem('session_user','priti')
  console.log(localStorage.getItem('username'));
  console.log(sessionStorage.getItem('session_user'));

}
}
