import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'mcp-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  Products:any=null
  Category : string=""

  constructor(private category: CategoryService, private route: ActivatedRoute) {
    this.route.params.subscribe((params : any)=>{
      console.log("params id: ", params.id)
      category.getProductsOfCategory(params.id).subscribe((data: any)=>{
        console.log(data, "in mcp-home-product")
        this.Products=data
        if(this.Products){
          this.Category=this.Products[0].category.name
        }
        //console.log("in ProductDetails : ", this.Products)
      })
   })
  }
  
  ngOnInit(): void {}


}
