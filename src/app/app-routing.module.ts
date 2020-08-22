import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AboutComponent } from './modules/pages/about/about.component';
import { PodcastComponent } from './modules/pages/podcast/podcast.component';
import { VideosComponent } from './modules/pages/videos/videos.component';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { BlogComponent } from './modules/pages/blog/blog.component';
import { EventsComponent } from './modules/pages/events/events.component';


const routes: Routes = [
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'videos', component: VideosComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'events', component: EventsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

