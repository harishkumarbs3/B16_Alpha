import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: any;

  loginform!: FormGroup;
  
  error = "";
  userId: any;
  oninit() {
    this.loginform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.oninit();
  }

  submit() {
    /* if (this.loginform.valid) {
       this.loginservice.login(this.loginform.value).subscribe(result => {
         if(result.success) {
           console.log(result);
           alert(result.message);
           this.router.navigateByUrl('register');}
           else{
             alert(result.message);}
           });*/

    this.loginservice.login(this.loginform.value).subscribe(result => {
      let res: any = result;
     // console.log(result);
      let token = ['token'];
      let userdetails=res['userDetails'];
      localStorage.setItem("authToken", res["token"]);
      localStorage.setItem("userId",userdetails["userId"]);
      this.userId = res['userId'];
      this.router.navigateByUrl("home");
    }, error => {
      if (error.status == 401) {
        alert("username or password is invalid");
      this.loginform.reset({});
      }
    });

  }
  reg(): void {
    this.router.navigateByUrl('register');
  }
}
  /*reg(): void {
  this.router.navigateByUrl('register');
}*/

/*
login():void {
  if(this.loginform.valid){
    this.router.navigateByUrl('register');}
    else{
      this.router.navigateByUrl('[]');
    }*/


