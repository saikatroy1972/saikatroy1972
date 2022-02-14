import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PrintdataComponent } from './printdata/printdata.component';
import { UserauthComponent } from './userauth/userauth.component';

const routes: Routes = [
  { path:"",redirectTo:"home",pathMatch:"full" },
  { path: 'home', component: HomepageComponent },
  { path: 'userauth', component: UserauthComponent },
  { path: 'printdata', component: PrintdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
