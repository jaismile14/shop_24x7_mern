import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'mcp-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent implements OnInit {

  constructor(private products: ProductService, private router: Router) { }
  Products:any=null
  ngOnInit(): void {
    this.products.getProducts().subscribe((data: any)=>{
      console.log(data, "in mcp-home-product")
      this.Products=data
    })
    console.log('in home product component', this.Products)
  }

 

}
