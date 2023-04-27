import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm! :  FormGroup;
  errorMessage :any;
  constructor(private authService : AuthService ,private _router :Router) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      username : new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  handleLogin(){
    let username=this.myForm.value.username ;
    let password= this.myForm.value.password;
    this.authService.login(username,password).subscribe({
      next :(AppUser)=>{
        this.authService.authenticateUser(AppUser).subscribe({next:(data)=>{
          this._router.navigateByUrl("/admin");
        }});
      },
      error:(error)=>{
        this.errorMessage=error;
      }
    })
  }

}
