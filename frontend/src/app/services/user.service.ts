import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from "../../../intefaces/userProfile";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  login (email: string, password: string){
    console.log("in UserService Login method ", email, password)
    var error="";
    this.http.post("http://localhost:3000/api/v1/users/login", {email, password}).subscribe((data: any)=>{
      //console.log(data)
      window.sessionStorage.setItem("access-token", JSON.stringify(data.accessToken));
      window.sessionStorage.setItem("loginUserId", data.user.id);
      window.sessionStorage.setItem("loginUserFirstName", data.user.firstName);
      window.sessionStorage.setItem("loginUserLastName", data.user.lastName);
      window.sessionStorage.setItem("loginUserEmail", data.user.email);

      window.sessionStorage.setItem('isLoggedIn','true');
      window.sessionStorage.setItem('isAdmin',data.user.isAdmin);

      //window.sessionStorage.removeItem("loginUserInfo")
      //localStorage.removeItem('admin');
      console.log(data);
      console.log('Checking Login User Details');

      this.router.navigateByUrl("/") //Change this to home page
    },
    (error) => {                              //Error callback
      console.error('error caught in component message', error)
      // this.errorMessage = error;
      // this.loading = false;
      error= "error"
      //throw error;   //You can also throw the error to a global error handler
    })
    return error
  }

  register (firstName: string, lastName: string, email: string, password: string){
    console.log("in UserService register method ", firstName, lastName, email, password)
    return this.http.post("http://localhost:3000/api/v1/users/register", {firstName, lastName, email, password}).subscribe((data: any)=>{
      console.log("in UserService register response data is ", data)
      this.router.navigateByUrl("/")
    })
  }

  getProfile(){
    var userId=window.sessionStorage.getItem("loginUserId");
    console.log("in get Profile. UserId: ", userId)
    return this.http.get("http://localhost:3000/api/v1/users/"+userId);
  }

  updateProfile(userDetails: any){
    var userId=window.sessionStorage.getItem("loginUserId");
    return this.http.put("http://localhost:3000/api/v1/users/"+userId, userDetails).subscribe((data: any)=>{
      console.log("in UserService register response data is ", data)

    })
  }
}
