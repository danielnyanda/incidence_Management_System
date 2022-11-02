import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  isSubmitted:boolean = false;

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

    // convenience getter for easy access to form fields
    get fc() { return this.loginForm.controls; }

    //login function
  login(){
    if(this.loginForm.valid==true){
      this.router.navigate(['/navigator']);
    }
  }

}
