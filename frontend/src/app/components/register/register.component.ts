import { Component, OnInit, NgModule } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import CompareValidator from 'src/app/validators/compare';

@Component({
  selector: 'mcp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private user: UserService) { }
  form = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.pattern("^[\\w\\.=-]+@[\\w\\.-]+\.[\\w]{2,3}$")]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl(''),
  },[CompareValidator("password", "confirmPassword")])

  ngOnInit(): void {
  }
  registerUser() {
    this.user.register(this.form.get("firstName")+"", this.form.get("lastName")+"", this.form.get("email")+"", this.form.get("password")+"")
  }

  get firstName(): AbstractControl | null{
    return this.form.get("firstName")
  }
  get lastName(): AbstractControl | null{
    return this.form.get("lastName")
  }
  get email(): AbstractControl | null{
    return this.form.get("email")
  }
  get password(): AbstractControl | null{
    return this.form.get("password")
  }
  get confirmPassword(): AbstractControl | null{
    return this.form.get("confirmPassword")
  }
  
}
