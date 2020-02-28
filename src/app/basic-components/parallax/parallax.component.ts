import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'parallax',
  templateUrl: './parallax.component.html',
  styleUrls: [ './parallax.component.css' ]
})
export class Parallax  {
  @Input("img") img: string;
   constructor() {

  }
  public getURL(){
    return "url("+this.img+")";
  }

  ngOnInit() {
  }
}