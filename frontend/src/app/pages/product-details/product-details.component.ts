import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'mcp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  Product: any
  Products:any
  selectedQuantity: number = 1;

  constructor(private route : ActivatedRoute, private product: ProductService, private router: Router, private cart: CartService) {
    this.route.params.subscribe((params : any)=>{
      console.log("params id: ", params.id)
      product.getProductDetail(params.id).subscribe((data: any)=>{
        console.log(data, "in mcp-home-product")
        this.Product=data
        console.log("in ProductDetails : ", this.Product)
      })
      
   })
  }
  
  
  ngOnInit(): void {
    this.product.getProducts().subscribe((data: any)=>{
      console.log(data, "in mcp-home-product")
      this.Products=data
    })
    console.log('in product details', this.Products)
  }
  
  openProductDetails(id: string){
    this.router.navigateByUrl("/product/"+id)
  }
  AddToCart(quantity: number){
    
    this.cart.AddToCart(this.Product,quantity+"")
    alert(this.Product.name + " added to cart. Quantity: "+ quantity)
  }
  
}
