import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantComponent} from '../restaurant/restaurant.component'

const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
