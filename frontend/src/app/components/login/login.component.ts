import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'mcp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {
    email: "",
    password: ""
  }
  constructor(private user: UserService, private router: Router) { }

  errorMsg: string=""

  ngOnInit(): void {
  }

  loginUser(form: NgForm) {
    console.log("in loginUser ", this.form.email, this.form.password)
    this.errorMsg = this.user.login(this.form.email, this.form.password)
    console.log("in ligin user. error value is : ", this.errorMsg)
    this.router.navigateByUrl("/home")
  }

}
