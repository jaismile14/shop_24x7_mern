import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'mcp-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  product: Product = new Product();

  // product={
  //   productName:"",
  //   department:"",
  //   price:0,
  //   discountPrice:0,
  //   image:"",
  //   description:"",
  //   topSelling:false
  // }



  constructor(private _httpClient:HttpClient, private _router:Router, private _categoryService:CategoryService) { }

  categoryList:any

  ngOnInit(): void {
    // if (!this._authGuard.isAdmin()){
    //   alert("Need admin privileges to access this page.");
    //   this._router.navigate(['home']);
    // }

    this._httpClient.get<Category[]>('http://localhost:3000/api/v1/categories/').subscribe(result=>{
      this.categoryList=result;
      console.log(this.categoryList);
    }, error=>{
      console.log(error);
    }
    )


  }

  addProduct(){
    console.log("Add Product Method",this.product);
    this._httpClient.post('http://localhost:3000/api/v1/admin/products/',this.product).subscribe(result=>{
    alert('Product Added')
    //this._router.navigate(['/admin/manage-products'])
      //console.log(result);
      //alert(result['message']);
      //window.location.replace('admin/manage-products')
      window.location.replace('/manage-products');
    },(err)=>{console.log(err) })
  }

}
