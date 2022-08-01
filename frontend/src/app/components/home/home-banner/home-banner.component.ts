import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'mcp-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  constructor(private products: ProductService) { }
  Products:any=null
  ngOnInit(): void {
    this.products.getProducts().subscribe((data: any)=>{
      console.log(data, "ProductPageComponent")
      this.Products=data
    })
  }

  data = [
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1 thtj t jtyjr j" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2j j j j ryrj yjr" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3  ryj ryryj ry" }
  ];

}
