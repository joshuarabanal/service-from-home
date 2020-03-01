import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

   getAsset(url:string){
    return "https://s3.amazonaws.com/assets.composemusic.org/arise/"+url+"";
  }
}
