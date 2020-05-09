import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component'
import {InspirationComponent} from './inspiration/inspiration.component'
import {AddComponent} from './add/add.component'
import {RestaurantComponent} from './restaurant/restaurant.component'


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'contribute', component: AddComponent},
  { path: 'get-inspired', component: InspirationComponent},
  {path: 'welcome', component: LandingPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
