import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'mcp-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {

  constructor(private categories: CategoryService, private router: Router) { }
  Categories:any=null
  ngOnInit(): void {
    this.categories.getCategories().subscribe((data: any)=>{
      console.log(data, "in mcp-home-product")
      this.Categories=data
    })
    console.log('in home Categories component', this.Categories)
  }

  openProductDetails(id: string){
    this.router.navigateByUrl("/product/"+id)
  }

}
