import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(){
    console.log("in getProducts ProductService ")
    return this.http.get("http://localhost:3000/api/v1/products/")
  }
  getProductDetail(id: string){
    return this.http.get("http://localhost:3000/api/v1/products/"+id)
  }

  addProduct(product: object){
    console.log("in addProduct ProductService ")
    return this.http.get("http://localhost:3000/api/v1/admin/products/")
  }
}
