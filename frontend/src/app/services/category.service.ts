import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private router: Router) { }

  getCategories(){
    console.log("in getProducts ProductService ")
    return this.http.get("http://localhost:3000/api/v1/categories/")
  }
  getProductsOfCategory(categoryId: string){
    return this.http.get("http://localhost:3000/api/v1/products/category/"+categoryId)
  }
}
