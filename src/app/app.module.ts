import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { AddComponent } from './add/add.component';
import { GalleryPictureComponent } from './inspiration/gallery-picture/gallery-picture.component';
import { RestaurantCardComponent } from './restaurant/restaurant-card/restaurant-card.component';
import { GalleryDetailsComponent } from './inspiration/gallery-details/gallery-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RestaurantComponent,
    InspirationComponent,
    AddComponent,
    GalleryPictureComponent,
    RestaurantCardComponent,
    GalleryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
