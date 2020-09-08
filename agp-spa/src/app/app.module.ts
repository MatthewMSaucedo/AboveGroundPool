import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LibraryComponent } from './library/library.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LibraryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
