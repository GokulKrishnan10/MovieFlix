import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")]),
    password:new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]),
    phone_number: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern("[6-9][0-9]{9}")]),

  })
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmission():void{
    console.log("Login form values are",this.loginForm.value)
  }

}
