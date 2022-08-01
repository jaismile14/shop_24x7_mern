import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'mcp-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

 authenticated: boolean= false;

 constructor(private checkout: CheckoutService, private cartService: CartService) { }

 //this.authenticated = window.sessionStorage.getItem("access-token") ? true : false;
  cartItems!: any[]
  orderItems!:any[]

  form ={
    orderItems: [
      {
        product:"",
        quantity:""
      }
    ],
    shippingAddress: {
        street: "",
        city: "",
        state: "",
        zip :""
    },
    status: "Pending",
    user:"",
    userinfo: {
      id:"",
      firstName:"",
      lastName:"",
      email:""
    },
  }
  ngOnInit(): void {
  this.form.user =window.sessionStorage.getItem("loginUserId") || "";
  this.form.userinfo.firstName = window.sessionStorage.getItem("loginUserFirstName") || "",
  this.form.userinfo.lastName  = window.sessionStorage.getItem("loginUserLastName") || "",
  this.form.userinfo.email= window.sessionStorage.getItem("loginUserEmail")  || ""

  this.cartItems= this.cartService.CartDetails();

  //this.orderItems=this.cartItems.map(function(a) {return a.product._id,a.product.quantity;});
  //this.orderItems=this.cartItems.map(t=>t.product._id,);
  this.orderItems=this.cartItems.map(cart => {
    return {
      product: cart.product._id,
      quantity: cart.quantity
    }
  })

  this.form.orderItems=this.orderItems;
  }

  checkoutOrder(form: NgForm) {
   this.checkout.checkout(this.form)
   //console.log(this.form);
   alert("Order Complete successfully")
   window.location.replace('/home');
  }
}
