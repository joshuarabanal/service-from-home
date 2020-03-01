import { Component, Directive, ViewChildren, 
          QueryList, Input , ContentChildren, 
          AfterContentInit, AfterViewInit, ElementRef
        } from '@angular/core';



//this is the class for the individual slideshow pages 
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

//used to mark each radio button
@Directive({selector: 'radioitem'})
export class InputRadio {
}

//made with: https://www.youtube.com/watch?v=GjcHAXNwPYM
//the entire slideshow window
@Component({
  selector: 'slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements AfterViewInit {
  @Input("page-ids") page : string;
  info:string = "nothing"
  @ViewChildren("radioitem") radioButtons: QueryList<ElementRef>
  @ContentChildren(SlideShowPageComponent) contentChildren !: QueryList<SlideShowPageComponent>;

  ngAfterViewInit() { 
    if(this.radioButtons.length == 0){//if there are no radio buttons
      var hasInitialized = false;
      this.radioButtons.changes.subscribe((item) => { 
        if(hasInitialized){
          return;
        }
        else{
          this.radioButtons.toArray()[0].nativeElement.click();
        }
     });
    }
    else{
      this.radioButtons.toArray()[0].nativeElement.click();
    }
    
  }

  getPages(): any[]{
    return JSON.parse(this.page);
  }

  

  radioSelected(index, item){
    console.log("radioButtons click", this.radioButtons);

    this.contentChildren.forEach(
      function(pageItem: SlideShowPageComponent, index: number, array: SlideShowPageComponent[]){
          if(pageItem.pageId == item){
            pageItem.className = "visible";
          }
          else{
            pageItem.className = "gone";
          }
      }
    );

  }

  


}