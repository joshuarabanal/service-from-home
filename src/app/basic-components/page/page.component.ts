import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input("title") title: string;
  @Input("background") background:string;
  @Input("text-color") textColor:string;
  //@Input("menu-item-names") menuNames: string[];

  //@Input("menu-item-links") nemuLinks: string;



  constructor() {

  }

  ngOnInit() {
  }

}