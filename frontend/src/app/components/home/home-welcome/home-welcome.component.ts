import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcp-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.scss']
})
export class HomeWelcomeComponent implements OnInit {

  @Input() type: any;
  constructor() { }
  register: boolean =false
  ngOnInit(): void {
    this.register=this.type
  
  }

}
