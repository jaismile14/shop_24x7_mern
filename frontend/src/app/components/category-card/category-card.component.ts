import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mcp-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: any;
  constructor(private router: Router) { }
  Category: any

  ngOnInit(): void {
    this.Category=this.category
    //console.log("in Category card : ", this.Category);
    
  }
  openProductList(id: string){
    this.router.navigateByUrl("/productlist/"+id)
  }
}
