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
  @Input("background") background:string;
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
 
  getBackground():string{
    if(!this.background){
      return "black";
    }
    console.log("background:"+ this.background);
    return "url('"+this.background);"
  }
  getPages(): any[]{
    return JSON.parse(this.page);
  }
  getInputByIndex(index:number):ElementRef{
    return this.getInputByValue(this.getPages()[index])
  }
  getInputByValue(value:string):ElementRef{
    let inputs= this.radioButtons.toArray();
    for(var i = 0; i<inputs.length; i++){
        let input:ElementRef = inputs[i];
        let element = input.nativeElement;
        if(element.getAttribute("value") == value){
          return element
        }
    }
    console.log("could not find input with value:"+value)
  }
  setSelectedValue(value:string){
    this.getInputByValue(value).checked = true;
  }
  arrowClick(left:boolean){
    var these= this;
    var pages = this.getPages();
    this.radioButtons.forEach(
      function(elem){
        let element = elem.nativeElement;
        if(element.checked){
            let item = element.getAttribute("value");
            let index:number = pages.indexOf(item);
            if(left){//increent index left
              index -= 1;
              if(index<0){index = 0;}
            }
            else{//increment index right
              index+=1;
              if(index>=pages.length){
                index = pages.length-1;
              }
            }
            these.setSelectedValue(pages[index]);
            these.radioSelected(pages[index]);
        }
      }
    )
  }
  

  radioSelected(item){

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