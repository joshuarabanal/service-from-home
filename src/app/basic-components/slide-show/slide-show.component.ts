import { Component, OnInit, Directive, ViewChildren, QueryList, Input } from '@angular/core';

/*
@Directive({selector: 'input'})
class Slide {
}
*/


@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  @Input("page-ids") page : string;

  getLength(){
    console.log("page elems", this.page);
    return JSON.parse(this.page).length;
  }




 // @ViewChildren(Slide) slides !: QueryList<Slide>;
/*
  getLength(){ 
    if(!this.slides){
      return -1;
    }
    return this.slides.length;
    }
    */


  constructor() { }

  ngOnInit() {
  }

}