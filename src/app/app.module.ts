import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, RouterOutlet } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from '../app/restaurants/restaurant/restaurant.component';
import { restaurantsService } from './restaurants/restaurants.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
    /* importação de módulos, inclusive o modo de roteamento */
  ],
  providers: [restaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
