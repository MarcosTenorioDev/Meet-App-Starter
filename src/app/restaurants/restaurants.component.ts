import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { restaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})
export class RestaurantsComponent implements OnInit {

  /* Array de restaurantes que recebe objetos do tipo Restaurant */
  restaurants: Restaurant[]
  /* Injeção de dependências, injetei restaurantsServices e não é necessário instanciar manualmente */
  constructor(private restaurantsService: restaurantsService) { }

  /* No inicio do componente, roda a função ngOnInit que atribui a restaurants a função restaurants()
  Da classe restaurantsService*/
  ngOnInit() {
    this.restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
