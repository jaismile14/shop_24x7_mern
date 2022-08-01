import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ICart } from 'intefaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'mcp-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  Cart : any[] =[]
  constructor(private cart: CartService, private router: Router) {
    this.Cart= this.cart.CartDetails()
   }

  ngOnInit(): void {
    this.cart.cartLatestValue.subscribe((data) =>{
      this.Cart=data
      console.log("in actual cart", this.Cart)
    })
     
  }

  Checkout(){
    this.router.navigateByUrl("/checkout")
  }
}
