import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ActionBarComponent } from './basic-components/action-bar/action-bar.component';
import { ActionButton } from './basic-components/action-bar/action-button/action-button.component';
import { PageComponent } from './basic-components/page/page.component';
import { Parallax } from './basic-components/parallax/parallax.component';
import { PageParallaxComponent } from './basic-components/page/page-parallax/page-parallax.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 

    //basic-components/
    ActionButton, ActionBarComponent, PageComponent, Parallax, PageParallaxComponent 

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
