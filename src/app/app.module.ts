import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ActionBarComponent } from './basic-components/action-bar/action-bar.component';
import { ActionButton } from './basic-components/action-bar/action-button/action-button.compontent';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 

    //basic-components/
    ActionButton, ActionBarComponent 

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
