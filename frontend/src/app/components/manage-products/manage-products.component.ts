import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
//import { Product } from 'src/app/models/product';
//import { AuthGuard } from '../services/auth-guard.service';

@Component({
  selector: 'mcp-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  id:string="";
  // product:Product = new Product();
  // products!:Array<Product>;
  productList!:any

  products =[{
    id:"",
    name:"",
    category:"",
    price:"",
    discountprice:"",
    image:"",
    description:"",
    isTopProduct:""
  }]

  constructor(private _httpClient:HttpClient, private _route:ActivatedRoute,
    private _router:Router//, private _authGuard:AuthGuard
    ) { }

  ngOnInit(): void {

    // if (!this._authGuard.isAdmin()){
    //   alert("Need admin privileges to access this page.");
    //   this._router.navigate(['homepage']);
    // }

    this.id = this._route.snapshot.paramMap.get('id')||"";
    this.getProducts();

  }

  getProducts(){
    this._httpClient.get<Product[]>('http://localhost:3000/api/v1/products/').subscribe(result=>{
      this.productList=result;

      console.log(result);
    }, error=>{
      console.log(error);
    }

    )
  }

  // http://localhost:3000/api/v1/admin/products/60fee536e9a56238c468c4c5

  deleteProduct(productId:string)
  {
    this._httpClient.delete('http://localhost:3000/api/v1/admin/products/'+productId).subscribe(result=>{
     alert('product deleted successfully');
     this.getProducts();
    //this._router.navigate(['/manage-products']);
    },
    error=>{
        console.log(error);
    })
  }
}
