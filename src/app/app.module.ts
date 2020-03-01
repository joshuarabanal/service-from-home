import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

//my componenets
import { ActionBarComponent } from './basic-components/action-bar/action-bar.component';
import { ActionButton } from './basic-components/action-bar/action-button/action-button.component';
import { PageComponent } from './basic-components/page/page.component';
import { Parallax } from './basic-components/parallax/parallax.component';
import { PageParallaxComponent } from './basic-components/page/page-parallax/page-parallax.component';
import { ActionBannerComponent } from './basic-components/action-banner/action-banner.component';
import { SlideShowComponent, SlideShowPageComponent } from './basic-components/slide-show/slide-show.component';
import { PageSection } from './basic-components/page/page-section/page-section.component';


//individual pages
import { SignUpComponent } from './navigation/sign-up/sign-up.component';
import { MainPageComponent } from './navigation/main-page/main-page.component';





@NgModule({
  imports:      [ 
    BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      //{path:"arise.html", component: AriseRoot},
      {path:"signup", component: SignUpComponent}
    ])

  ],
  declarations: [ 
    AppComponent,

    //basic-components/
    ActionButton, ActionBarComponent, PageComponent, Parallax, PageParallaxComponent, ActionBannerComponent , SlideShowComponent, SlideShowPageComponent, PageSection, SignUpComponent, MainPageComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
