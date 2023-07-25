import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, RouterLink } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import {HttpClientModule} from '@angular/common/http';
import { ShowsComponent } from './shows/shows.component';
import { FotterComponent } from './fotter/fotter.component';
import { GenreComponent } from './genre/genre.component';
import { PopupComponent } from './popup/popup.component';
import { BannerComponent } from './banner/banner.component'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { AppearComponent } from './appear/appear.component';
import { SmallbannerComponent } from './smallbanner/smallbanner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieComponent,
    ContainerComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DefaultComponent,
    ShowsComponent,
    FotterComponent,
    GenreComponent,
    PopupComponent,
    BannerComponent,
    SearchComponent,
    AppearComponent,
    SmallbannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
