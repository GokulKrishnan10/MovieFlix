import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component'
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'',component:DefaultComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'search',component:SearchComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
