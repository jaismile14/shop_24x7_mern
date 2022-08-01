import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'mcp-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  constructor(private router : Router, private cart: CartService) { }
  Product: any

  ngOnInit(): void {
    this.Product=this.product
    //console.log("in product card : ", this.Product);
    
  }
  openProductDetails(id: string){
    this.router.navigateByUrl("/product/"+id)
  }
  AddToCart(quantity: string){
    this.cart.AddToCart(this.Product,quantity)
    alert(this.Product.name + " added to cart.")
  }
}
