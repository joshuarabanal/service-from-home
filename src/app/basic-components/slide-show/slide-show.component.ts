import { Component, Directive, ViewChildren, ViewChild,
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
  private active:boolean = false;
  public className:string = "gone";
  @Input("page-id") pageId;
  @Input("background-image") backgroundImage;
  private element:ElementRef;

  constructor(private elRef:ElementRef){
    console.log("element ref:", elRef);
    this.element = elRef;
  }
  setVisible(visible:boolean){
    this.active = visible;
    if(this.active){ this.className = "visible"; }
    else{ this.className = "gone"; }
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
   background:string;
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
    return "url("+this.background+")";
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
  getSlideShowPage(pageId:string){
    let pages = this.contentChildren.toArray();
    for(var i = 0; i<pages.length; i++){
      if(pages[i].pageId == pageId){
        return pages[i];
      }
    }
  }
  arrowClick(left:boolean){
    console.log("arrow clicked", left);
    var these= this;
    var pages = this.getPages();
    let radioarray = this.radioButtons.toArray()
    for(let i = 0; i< radioarray.length; i++){
        var element = radioarray[i].nativeElement;
        if(element.checked){
            let item = element.getAttribute("value");
            let index:number = pages.indexOf(item);
            if(left){//increent index left
              console.log("increment left "+index)
              index -= 1;
              if(index<0){index = pages.length-1;}
            }
            else{//increment index right
              console.log("increment right "+index)
              index+=1;
              if(index>=pages.length){
                index = 0;
              }
            }
            these.setSelectedValue(pages[index]);
            these.radioSelected(pages[index]);
            break;
        }
    }
    
  }
  

  radioSelected(item){
    console.log("radio selected:", item);
    let these = this;
    this.contentChildren.forEach(
      function(pageItem: SlideShowPageComponent, index: number, array: SlideShowPageComponent[]){
        console.log(pageItem.pageId+"=="+ item)
          if(pageItem.pageId == item){
            pageItem.setVisible(true);
            these.background = "url("+pageItem.backgroundImage+")";
            console.log("img:"+these.background);
          }
          else{
            pageItem.setVisible(false);
          }
      }
    );

  }

  


}