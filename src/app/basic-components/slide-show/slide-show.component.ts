import { Component, OnInit, Directive, ViewChildren, QueryList, Input } from '@angular/core';


@Directive({selector: 'slide'})
class Slide {
  @Input("title") title: string;
}


@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {

  @ViewChildren(Slide) slides !: QueryList<Slide>;

  getLength(){ 
    window.alert("`slides length:"+this.slides.length);
    return this.slides.length;}


  constructor() { }

  ngOnInit() {
  }

}