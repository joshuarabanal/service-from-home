import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-banner',
  templateUrl: './action-banner.component.html',
  styleUrls: ['./action-banner.component.css']
})
export class ActionBannerComponent implements OnInit {
  @Input("title") title:String;
  @Input("href") href:string;
  @Input("button-title") buttonTitle: string;

  constructor() { }

  ngOnInit() {
  }

}