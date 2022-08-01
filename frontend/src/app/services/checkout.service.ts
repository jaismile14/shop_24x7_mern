import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from "../../../intefaces/userProfile";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient, private router: Router) { }


  checkout (product: object){
    console.log("in CheckoutService checkout order method ", product)
    return this.http.post("http://localhost:3000/api/v1/orders/",product).subscribe((data: any)=>{
      console.log("in CheckoutService checkoutorder response data is ", data)
      this.router.navigateByUrl("/")
    })
  }

}
