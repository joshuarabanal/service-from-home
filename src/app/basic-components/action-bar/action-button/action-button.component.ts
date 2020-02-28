import { Component, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButton implements OnInit {
  @Input("title") title: string;
  @Input("href") link;
  actionbarClass: string = "transparent";

   @HostListener("window:scroll", [])
    onWindowScroll() {

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
  }

}