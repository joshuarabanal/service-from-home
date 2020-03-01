import { Component, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input("title") title: string;
  @Input("action-icon") actionIcon: string[];
  @Input("disable-fade") disableFade : boolean;
  @Input("add-spacer") addSpacer: boolean;
  actionbarClass: string;
  //@Input("menu-item-names") menuNames: string[];
  
 


  //@Input("menu-item-links") nemuLinks: string;
  @HostListener("window:scroll", [])
    onWindowScroll() {
      if(this.disableFade){ return; }
      this.updateScroll();
    }
    updateScroll(){
      const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (number > 100) {
        this.actionbarClass = "opaque";
      } else{
        this.actionbarClass = "transparent";
      }
    }

  constructor() {
      
  }

  ngOnInit() {
      this.updateScroll();
      if(this.disableFade){
        this.addSpacer = true;
      }
    console.log("disable fade:"+this.disableFade);
        this.actionbarClass =  this.disableFade? "nofade" : "transparent";
      
  }

}