import { Component, OnInit, Directive, ViewChildren, QueryList, Input , ContentChildren, } from '@angular/core';


@Directive({
  selector: '[page-id]'
})
export class PageIds {
}


@Component({
  selector: 'slide-show-page',
  templateUrl:'./slide-show-page/page.html',
  styleUrls:['./slide-show-page/page.css']
})
export class SlideShowPageComponent {
  active:boolean;
  public className:string;
  @Input("page-id") pageId;
  getElemClass(){ return this.active? "visible": "gone"; }
  constructor(){
    this.className = "gone";
  }

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
  @ViewChildren("radioItem") pages: QueryList<any>
  @ContentChildren(SlideShowPageComponent) contentChildren !: QueryList<SlideShowPageComponent>;
  @ContentChildren(PageIds) pageIds !: QueryList<PageIds>;

  getPages(): any[]{
    return JSON.parse(this.page);
  }

  getLength(){
    return this.getPages().length;
  }


  radioSelected(index, item){
    console.log("radio selected:"+item);
    console.log("pages", this.pages);
    console.log("content childs:",this.contentChildren)

    this.contentChildren.forEach(
      function(item: SlideShowPageComponent, index: number, array: SlideShowPageComponent[]){
          console.log("loop")
          console.log("item["+index+"]:", item);
          if(item.pageId == item){
            item.className = "visible";
            console.log("found item:", item)
          }
          else{
            console.log(item.pageId+"!="+item);
            item.className = "gone";
          }
      }
    );

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