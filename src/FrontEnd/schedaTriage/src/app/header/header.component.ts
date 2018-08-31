import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  imgLogoVVF: string;
  imgLogoSTCS: string;  

  constructor() { 
    this.imgLogoVVF = require("./img/logoVVF.png");
    this.imgLogoSTCS = require("./img/logoSTCS.png");    
  }

  ngOnInit() {
  }

}
