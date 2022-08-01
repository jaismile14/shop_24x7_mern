import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ICart } from 'intefaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mcp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  Cart : any[] =[]
  authenticated: boolean= false
  isLoggedIn: boolean= false
  isAdmin: boolean= false
  firstName: string= ""

  constructor(private cart: CartService, private router: Router) {
    this.cart.CartDetails()
   }

  ngOnInit(): void {
    this.cart.cartLatestValue.subscribe((data) =>{
      this.Cart=data
      console.log("in header cart", this.Cart)
    })
     this.authenticated = window.sessionStorage.getItem("access-token") ? true : false;
     this.isLoggedIn = window.sessionStorage.getItem("isLoggedIn")==="true" ? true : false;
     this.isAdmin = window.sessionStorage.getItem("isAdmin")==="true" ? true : false;
     this.firstName=window.sessionStorage.getItem("loginUserFirstName") || "";

     console.log("isLoggedIn",this.isLoggedIn);
     console.log("isAdmin",this.isAdmin);
     console.log("firstName",this.firstName);
  }
  LogOff(){
    window.sessionStorage.clear()
    localStorage.clear();
    //this.router.navigateByUrl("/home")
    window.location.replace('/home');
  }
}
