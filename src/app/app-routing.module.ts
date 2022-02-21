import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { UserauthComponent } from './userauth/userauth.component';
import { AddProfilePageComponent } from './add-profile-page/add-profile-page.component';
import { HandsonComponent } from './handson/handson.component';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full" },
  { path: 'home', component: HomepageComponent },
  { path: 'userauth', component: UserauthComponent },
  { path: 'printdata', component: PrintdataComponent },
  { path: 'add', component: AddprofileComponent },
  // { path: 'add', component: AddProfilePageComponent },
  { path: 'handson', component: HandsonComponent },
  { path: 'country', component: CountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
