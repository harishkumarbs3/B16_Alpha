import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 // isSubmitted: boolean = false;
 // isSubmitted: boolean = false;
  // isSubmitted: boolean = false;
  // isSubmitted: boolean = false;
  loginform!: FormGroup;
 oninit(){
 this.loginform = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
 }
 

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.oninit();
  }

  submit() {
if(this.loginform.valid){ 
  this.loginservice.login(this.loginform.value).subscribe();

  }
}
}