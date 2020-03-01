import { Component } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.css' ]
})
export class MainPageComponent  {
  name = 'Angular';

   getAsset(url:string){
    return "https://s3.amazonaws.com/assets.composemusic.org/arise/"+url+"";
  }
}
