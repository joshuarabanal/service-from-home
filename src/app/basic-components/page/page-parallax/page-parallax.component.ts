import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-parallax',
  templateUrl: './page-parallax.component.html',
  styleUrls: ['./page-parallax.component.css']
})
export class PageParallaxComponent implements OnInit {
  @Input("title") title:string;
  @Input("img") img:string;
  constructor() { }
  getImg(){
    return "url('"+this.img+"')"
  }
  ngOnInit() {
  }

}