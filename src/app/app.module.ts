import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { PodcastComponent } from './modules/pages/podcast/podcast.component';
import { VideosComponent } from './modules/pages/videos/videos.component';
import { EventsComponent } from './modules/pages/events/events.component';
import { BlogComponent } from './modules/pages/blog/blog.component';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PodcastComponent,
    VideosComponent,
    EventsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
