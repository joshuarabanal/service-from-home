import { Component, OnInit, Directive, ViewChildren, QueryList, Input } from '@angular/core';


@Directive({
  selector: '[page-id]'
})
export class PageIds {
}

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
  info:string = "nothing"
  @ViewChildren("div") pages: QueryList<any>

  getPages(){
    return JSON.parse(this.page);
  }

  getLength(){
    return this.getPages().length;
  }


  radioSelected(item){
    console.log("radio selected:"+item);
    console.log("pages", this.pages);

    this.info = "selected:"+item;
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