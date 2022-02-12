import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { TopheadnavComponent } from './topheadnav/topheadnav.component';
import { FootComponent } from './foot/foot.component';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    TopheadnavComponent,
    FootComponent,
    BodycontentComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
