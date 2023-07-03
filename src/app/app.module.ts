import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebModule } from './layouts/web/web.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { OurFirmComponent } from './pages/our-firm/our-firm.component';
import { OurPracticesComponent } from './pages/our-practices/our-practices.component';
import { OurPeopleComponent } from './pages/our-people/our-people.component';
import { NewsEventsComponent } from './pages/news-events/news-events.component';
import { ShortcodesComponent } from './pages/shortcodes/shortcodes.component';
import { LocationComponent } from './pages/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurFirmComponent,
    OurPracticesComponent,
    OurPeopleComponent,
    NewsEventsComponent,
    ShortcodesComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    WebModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
