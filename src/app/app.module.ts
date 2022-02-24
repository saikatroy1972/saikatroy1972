import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { TopheadnavComponent } from './topheadnav/topheadnav.component';
import { FootComponent } from './foot/foot.component';
import { BodycontentComponent } from './bodycontent/bodycontent.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { UserauthComponent } from './userauth/userauth.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AddProfilePageComponent } from './add-profile-page/add-profile-page.component';
import { HandsonComponent } from './handson/handson.component';
import { HotTableModule } from '@handsontable/angular';
import { CountryComponent } from './country/country.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    TopheadnavComponent,
    FootComponent,
    BodycontentComponent,
    PreloaderComponent,
    UserauthComponent,
    PrintdataComponent,
    HomepageComponent,
    AddprofileComponent,
    AddProfilePageComponent,
    HandsonComponent,
    CountryComponent,
    UserlistComponent,
    UpdateprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HotTableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
