import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcp-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAdmin: boolean=false
  constructor() { }

  ngOnInit(): void {
    this.isAdmin = window.sessionStorage.getItem("isAdmin")==="true" ? true : false;
  }

}
