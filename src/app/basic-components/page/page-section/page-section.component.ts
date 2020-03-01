import { Component, OnInit , Input, HostBinding, HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.css']
})
export class PageSection implements OnInit {
  @Input("title") title: string;
  @HostBinding('style.float') @Input("float") float: string ;
  @HostBinding('style.top.px') public pos: number;
  
  num: number = 0;


  getDisplayType(): string{
    if(this.float=='left'){
        if(this.title){ return "leftTitle"; }
        return "left";
    }
    else if(this.float == 'right'){
        if(this.title){ return "rightTitle"; }
        return "right";
    }
    else{
        if(this.title){ return "title"; }
        return "";
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}