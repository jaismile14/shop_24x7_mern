import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mcp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  register: boolean=false

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params : any)=>{
      console.log("in home params id: ", params.id)
      if(params.id==="register"){
        this.register=true;
      }
   })
   }
  authenticated: boolean= false
  ngOnInit(): void {
    this.authenticated = window.sessionStorage.getItem("access-token") ? true : false;
  }

}
