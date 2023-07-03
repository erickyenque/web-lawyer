import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LocationComponent } from 'src/app/pages/location/location.component';
import { NewsEventsComponent } from 'src/app/pages/news-events/news-events.component';
import { OurFirmComponent } from 'src/app/pages/our-firm/our-firm.component';
import { OurPeopleComponent } from 'src/app/pages/our-people/our-people.component';
import { OurPracticesComponent } from 'src/app/pages/our-practices/our-practices.component';
import { ShortcodesComponent } from 'src/app/pages/shortcodes/shortcodes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-firm', component: OurFirmComponent },
  { path: 'our-practices', component: OurPracticesComponent },
  { path: 'our-people', component: OurPeopleComponent },
  { path: 'new-events', component: NewsEventsComponent },
  { path: 'shortcodes', component: ShortcodesComponent },
  { path: 'location', component: LocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
